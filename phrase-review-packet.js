const packetRows = document.querySelector("#packetRows");
const printButton = document.querySelector("#printReviewPacket");
const phraseCount = document.querySelector("#packetPhraseCount");
const languageCount = document.querySelector("#packetLanguageCount");
const generatedDate = document.querySelector("#packetGeneratedDate");
const storageKey = "red-cross-language-phrase-review-v1";

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

function appendText(parent, tagName, text, className) {
  const element = document.createElement(tagName);
  element.textContent = text || "";
  if (className) element.className = className;
  parent.append(element);
  return element;
}

function reviewLine(label) {
  const item = document.createElement("label");
  item.textContent = label;
  item.append(document.createElement("span"));
  return item;
}

function renderPacket(registry) {
  if (!packetRows) return;
  packetRows.replaceChildren();

  if (phraseCount) phraseCount.textContent = String(registry.rows.length);
  if (languageCount) languageCount.textContent = String(registry.languages.length);
  if (generatedDate) {
    const date = registry.metadata?.lastEditedAt || registry.metadata?.generatedAt || new Date().toISOString();
    generatedDate.textContent = new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(new Date(date));
  }

  registry.rows.forEach((row, index) => {
    const card = document.createElement("article");
    card.className = "review-phrase-card";

    const heading = document.createElement("div");
    heading.className = "review-phrase-heading";
    const title = document.createElement("div");
    appendText(title, "span", `Phrase ${index + 1}`, "review-phrase-number");
    appendText(title, "h2", row.englishSource);
    appendText(title, "p", `${row.category} | ${row.phraseId}`);
    const badge = appendText(heading, "strong", row.riskLevel, `review-risk review-risk-${row.riskLevel.toLowerCase()}`);
    badge.setAttribute("aria-label", `${row.riskLevel} risk phrase`);
    heading.prepend(title);
    card.append(heading);

    const approval = document.createElement("div");
    approval.className = "review-fields";
    approval.append(
      reviewLine("Approval state"),
      reviewLine("Reviewer"),
      reviewLine("Approved date"),
      reviewLine("Needs change")
    );
    card.append(approval);

    const source = document.createElement("div");
    source.className = "review-source";
    appendText(source, "h3", "English source");
    appendText(source, "p", row.englishSource);
    appendText(source, "h3", "Notes");
    appendText(source, "p", row.notes || " ");
    card.append(source);

    const table = document.createElement("table");
    table.className = "review-translation-table";
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    ["Language", "Draft translation", "Reviewer correction / approval notes"].forEach((header) => {
      appendText(headerRow, "th", header);
    });
    thead.append(headerRow);

    const tbody = document.createElement("tbody");
    registry.languages.forEach((language) => {
      const tr = document.createElement("tr");
      appendText(tr, "th", `${language.name} (${language.code})`);
      const draft = appendText(tr, "td", row.translations[language.code] || "");
      draft.lang = language.code;
      draft.dir = language.dir || "ltr";
      const notes = document.createElement("td");
      notes.className = "review-note-cell";
      notes.append(document.createElement("span"));
      tr.append(notes);
      tbody.append(tr);
    });
    table.append(thead, tbody);
    card.append(table);

    packetRows.append(card);
  });
}

if (packetRows) {
  fetch("emergency-phrase-review.json")
    .then((response) => {
      if (!response.ok) throw new Error("Review packet failed to load");
      return response.json();
    })
    .then((data) => renderPacket(loadSaved(data)))
    .catch(() => {
      packetRows.textContent = "Review packet could not load.";
    });
}

printButton?.addEventListener("click", () => window.print());
