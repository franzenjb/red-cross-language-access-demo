const registryTable = document.querySelector("#phraseRegistryTable");
const registryMeta = document.querySelector("#phraseRegistryMeta");

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (inQuotes) {
      if (char === "\"" && next === "\"") {
        value += "\"";
        index += 1;
      } else if (char === "\"") {
        inQuotes = false;
      } else {
        value += char;
      }
      continue;
    }

    if (char === "\"") {
      inQuotes = true;
    } else if (char === ",") {
      row.push(value);
      value = "";
    } else if (char === "\n") {
      row.push(value);
      rows.push(row);
      row = [];
      value = "";
    } else if (char !== "\r") {
      value += char;
    }
  }

  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  return rows;
}

function renderRegistry(rows) {
  if (!registryTable || rows.length < 2) return;
  const [headers, ...bodyRows] = rows;
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");
  const headerRow = document.createElement("tr");

  headers.forEach((header) => {
    const cell = document.createElement("th");
    cell.textContent = header;
    headerRow.append(cell);
  });
  tableHead.append(headerRow);

  bodyRows.forEach((row) => {
    const tableRow = document.createElement("tr");
    row.forEach((item, index) => {
      const cell = document.createElement(index === 0 ? "th" : "td");
      cell.textContent = item;
      tableRow.append(cell);
    });
    tableBody.append(tableRow);
  });

  registryTable.replaceChildren(tableHead, tableBody);
  if (registryMeta) {
    const languageCount = Math.max(headers.length - 10, 0);
    registryMeta.textContent = `${bodyRows.length} source phrases across ${languageCount} languages. All rows are draft review candidates.`;
  }
}

if (registryTable) {
  fetch("emergency-phrase-review.csv")
    .then((response) => {
      if (!response.ok) throw new Error("Phrase registry failed to load");
      return response.text();
    })
    .then((text) => renderRegistry(parseCsv(text)))
    .catch(() => {
      registryTable.textContent = "Phrase review registry could not load.";
    });
}
