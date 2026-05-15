const registryTable = document.querySelector("#phraseRegistryTable");
const registryMeta = document.querySelector("#phraseRegistryMeta");
const saveStatus = document.querySelector("#phraseSaveStatus");
const exportButton = document.querySelector("#exportPhraseReview");
const resetButton = document.querySelector("#resetPhraseReview");
const resetDialog = document.querySelector("#resetPhraseDialog");
const resetConfirmText = document.querySelector("#resetPhraseConfirmText");
const resetConfirmButton = document.querySelector("#confirmPhraseReset");
const resetCancelButton = document.querySelector("#cancelPhraseReset");
const storageKey = "red-cross-language-phrase-review-v1";

let registry = null;

function setStatus(message) {
  if (saveStatus) saveStatus.textContent = message;
}

function cloneRegistry(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadSaved(baseRegistry) {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return cloneRegistry(baseRegistry);
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed.rows) || !Array.isArray(parsed.languages)) return cloneRegistry(baseRegistry);
    return parsed;
  } catch {
    return cloneRegistry(baseRegistry);
  }
}

function saveRegistry() {
  if (!registry) return;
  registry.metadata.lastEditedAt = new Date().toISOString();
  localStorage.setItem(storageKey, JSON.stringify(registry));
  setStatus("Saved in this browser");
}

function cell(tagName, text, className) {
  const element = document.createElement(tagName);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}

function editableTextarea(value, options = {}) {
  const field = document.createElement("textarea");
  field.value = value || "";
  field.rows = options.rows || 2;
  field.lang = options.lang || "";
  field.dir = options.dir || "ltr";
  field.dataset.phraseId = options.phraseId;
  field.dataset.field = options.field;
  if (options.language) field.dataset.language = options.language;
  field.addEventListener("input", () => {
    const row = registry.rows.find((item) => item.phraseId === field.dataset.phraseId);
    if (!row) return;
    if (field.dataset.language) {
      row.translations[field.dataset.language] = field.value;
    } else {
      row[field.dataset.field] = field.value;
    }
    setStatus("Unsaved local edit");
    window.clearTimeout(field.saveTimer);
    field.saveTimer = window.setTimeout(saveRegistry, 350);
  });
  return field;
}

function approvalSelect(row) {
  const select = document.createElement("select");
  ["Draft - Needs Review", "In Review", "Approved", "Blocked"].forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    option.selected = row.approvalState === state;
    select.append(option);
  });
  select.addEventListener("change", () => {
    row.approvalState = select.value;
    saveRegistry();
  });
  return select;
}

function reviewerInput(row, field, type = "text") {
  const input = document.createElement("input");
  input.type = type;
  input.value = row[field] || "";
  input.addEventListener("input", () => {
    row[field] = input.value;
    setStatus("Unsaved local edit");
    window.clearTimeout(input.saveTimer);
    input.saveTimer = window.setTimeout(saveRegistry, 350);
  });
  return input;
}

function renderRegistry() {
  if (!registryTable || !registry) return;

  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");
  const headerRow = document.createElement("tr");
  [
    "Phrase",
    "Risk",
    "Approval",
    "English Source",
    "Reviewer",
    "Date",
    "Notes",
    ...registry.languages.map((language) => `${language.name} (${language.code})`)
  ].forEach((header) => headerRow.append(cell("th", header)));
  tableHead.append(headerRow);

  registry.rows.forEach((row) => {
    const tableRow = document.createElement("tr");
    tableRow.append(cell("th", row.phraseId));
    tableRow.append(cell("td", row.riskLevel, `risk-${row.riskLevel.toLowerCase()}`));

    const approvalCell = document.createElement("td");
    approvalCell.append(approvalSelect(row));
    tableRow.append(approvalCell);

    const sourceCell = document.createElement("td");
    sourceCell.className = "source-cell";
    sourceCell.append(cell("strong", row.category));
    sourceCell.append(editableTextarea(row.englishSource, {
      phraseId: row.phraseId,
      field: "englishSource",
      lang: "en",
      dir: "ltr",
      rows: 3
    }));
    tableRow.append(sourceCell);

    const reviewerCell = document.createElement("td");
    reviewerCell.append(reviewerInput(row, "reviewer"));
    tableRow.append(reviewerCell);

    const dateCell = document.createElement("td");
    dateCell.append(reviewerInput(row, "approvedDate", "date"));
    tableRow.append(dateCell);

    const notesCell = document.createElement("td");
    notesCell.append(editableTextarea(row.notes, {
      phraseId: row.phraseId,
      field: "notes",
      rows: 3
    }));
    tableRow.append(notesCell);

    registry.languages.forEach((language) => {
      const translationCell = document.createElement("td");
      translationCell.append(editableTextarea(row.translations[language.code], {
        phraseId: row.phraseId,
        field: "translations",
        language: language.code,
        lang: language.code,
        dir: language.dir,
        rows: row.riskLevel === "High" ? 4 : 2
      }));
      tableRow.append(translationCell);
    });

    tableBody.append(tableRow);
  });

  registryTable.replaceChildren(tableHead, tableBody);
  if (registryMeta) {
    registryMeta.textContent = `${registry.rows.length} editable source phrases across ${registry.languages.length} languages. Edits autosave locally in this browser.`;
  }
  setStatus(localStorage.getItem(storageKey) ? "Loaded saved local edits" : "Loaded draft registry");
}

function downloadJson() {
  if (!registry) return;
  const blob = new Blob([`${JSON.stringify(registry, null, 2)}\n`], { type: "application/json;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "emergency-phrase-review-edited.json";
  link.click();
  URL.revokeObjectURL(link.href);
}

function resetRegistry() {
  localStorage.removeItem(storageKey);
  window.location.reload();
}

function openResetDialog() {
  if (!resetDialog || !resetConfirmText || !resetConfirmButton) return;
  resetConfirmText.value = "";
  resetConfirmButton.disabled = true;
  resetDialog.showModal();
  resetConfirmText.focus();
}

function closeResetDialog() {
  resetDialog?.close();
}

function updateResetConfirmation() {
  if (!resetConfirmText || !resetConfirmButton) return;
  resetConfirmButton.disabled = resetConfirmText.value.trim() !== "RESET";
}

if (registryTable) {
  fetch("emergency-phrase-review.json")
    .then((response) => {
      if (!response.ok) throw new Error("Phrase registry failed to load");
      return response.json();
    })
    .then((data) => {
      registry = loadSaved(data);
      renderRegistry();
    })
    .catch(() => {
      registryTable.textContent = "Phrase review registry could not load.";
    });
}

exportButton?.addEventListener("click", downloadJson);
resetButton?.addEventListener("click", openResetDialog);
resetCancelButton?.addEventListener("click", closeResetDialog);
resetConfirmText?.addEventListener("input", updateResetConfirmation);
resetConfirmButton?.addEventListener("click", resetRegistry);
