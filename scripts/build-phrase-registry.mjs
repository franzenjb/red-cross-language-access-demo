import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(root, "emergency-alert-mirror.js");
const outputPath = path.join(root, "emergency-phrase-review.csv");
const source = fs.readFileSync(sourcePath, "utf8");

function extractObjectLiteral(text, variableName) {
  const startToken = `const ${variableName} = `;
  const start = text.indexOf(startToken);
  if (start === -1) throw new Error(`Could not find ${variableName}`);
  const objectStart = text.indexOf("{", start);
  let depth = 0;
  let inString = false;
  let stringQuote = "";
  let escaped = false;

  for (let index = objectStart; index < text.length; index += 1) {
    const char = text[index];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === stringQuote) {
        inString = false;
      }
      continue;
    }

    if (char === "\"" || char === "'" || char === "`") {
      inString = true;
      stringQuote = char;
    } else if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0) return text.slice(objectStart, index + 1);
    }
  }

  throw new Error(`Could not parse ${variableName}`);
}

const languages = Function(`"use strict"; return (${extractObjectLiteral(source, "languages")});`)();

const languageOrder = [
  "en",
  "es",
  "zh",
  "tl",
  "vi",
  "ar",
  "fr",
  "ko",
  "pt",
  "hi",
  "ht",
  "ru",
  "de",
  "te",
  "ur",
  "it",
  "pl",
  "bn",
  "gu",
  "ja",
  "fa"
];

const languageNames = {
  en: "English",
  es: "Spanish",
  zh: "Chinese",
  tl: "Tagalog",
  vi: "Vietnamese",
  ar: "Arabic",
  fr: "French",
  ko: "Korean",
  pt: "Portuguese",
  hi: "Hindi",
  ht: "Haitian Creole",
  ru: "Russian",
  de: "German",
  te: "Telugu",
  ur: "Urdu",
  it: "Italian",
  pl: "Polish",
  bn: "Bengali",
  gu: "Gujarati",
  ja: "Japanese",
  fa: "Farsi/Persian"
};

const phraseKeys = [
  ["app_choose_language", "App Entry", "chooseLanguage", "Low", "Draft - Needs Review"],
  ["app_locations", "Navigation", "locations", "Low", "Draft - Needs Review"],
  ["app_search_location", "Location Search", "search", "Medium", "Draft - Needs Review"],
  ["app_alerts", "Navigation", "alerts", "Low", "Draft - Needs Review"],
  ["alerts_none_active", "Alert Status", "noActive", "Medium", "Draft - Needs Review"],
  ["alerts_none_active_body", "Alert Status", "noActiveBody", "Medium", "Draft - Needs Review"],
  ["alerts_report_issue", "User Feedback", "report", "Medium", "Draft - Needs Review"],
  ["alerts_learn", "Education", "learn", "Low", "Draft - Needs Review"],
  ["alerts_learn_body", "Education", "learnBody", "Low", "Draft - Needs Review"],
  ["prepare", "Preparedness", "prepare", "Low", "Draft - Needs Review"],
  ["prepare_title", "Preparedness", "prepareTitle", "Low", "Draft - Needs Review"],
  ["prepare_improved_body", "Preparedness", "improvedBody", "Medium", "Draft - Needs Review"],
  ["prepare_plans_body", "Preparedness", "plansBody", "Low", "Draft - Needs Review"],
  ["prepare_get_started", "Call To Action", "getStarted", "Low", "Draft - Needs Review"],
  ["severe_thunderstorm_title", "Warning", "detailTitle", "High", "Draft - Needs Review"],
  ["severe_thunderstorm_body", "Protective Action", "detailBody", "High", "Draft - Needs Review"]
];

const headers = [
  "phrase_id",
  "category",
  "source_key",
  "risk_level",
  "approval_state",
  "source_language",
  "english_source",
  "reviewer",
  "approved_date",
  "notes",
  ...languageOrder.map((code) => `${languageNames[code]} (${code})`)
];

function csvValue(value) {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replaceAll("\"", "\"\"")}"` : text;
}

const missing = [];
const rows = phraseKeys.map(([phraseId, category, key, riskLevel, approvalState]) => {
  const values = languageOrder.map((code) => {
    const value = languages[code]?.[key];
    if (!value) missing.push(`${code}.${key}`);
    return value || "";
  });
  return [
    phraseId,
    category,
    key,
    riskLevel,
    approvalState,
    "English",
    languages.en[key],
    "",
    "",
    "AI draft translation pack. Requires bilingual human review before production release.",
    ...values
  ];
});

if (missing.length) {
  throw new Error(`Missing phrase translations: ${missing.join(", ")}`);
}

const csv = [headers, ...rows].map((row) => row.map(csvValue).join(",")).join("\n");
fs.writeFileSync(outputPath, `${csv}\n`);
console.log(`Wrote ${path.relative(root, outputPath)} with ${rows.length} phrases and ${languageOrder.length} languages.`);
