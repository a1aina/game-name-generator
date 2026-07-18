const ordinaryNames = ["Bob", "Ted", "Dave", "Steve", "Linda", "Susan", "Greg", "Carol", "Frank", "Janet"];

const profiles = {
  generic: {
    label: "general fantasy",
    starts: ["al", "ar", "bel", "cor", "dar", "el", "fa", "gal", "hel", "jor", "ka", "lor", "mar", "nor", "or", "ren", "sar", "tor", "val", "wyn"],
    middles: ["a", "e", "i", "o", "u", "ae", "ia", "or", "en", "ir", "al", "el"],
    ends: ["an", "ar", "en", "er", "eth", "ia", "in", "is", "on", "or", "ryn", "us", "yn"],
    patterns: ["se", "sme", "sse", "smee"]
  },
  human: {
    label: "human",
    starts: ["adr", "al", "bren", "cal", "dar", "ed", "gar", "hen", "jor", "luc", "mar", "nath", "ren", "sam", "the", "val"],
    middles: ["a", "e", "i", "o", "ia", "en", "el", "or"],
    ends: ["an", "en", "er", "ian", "in", "is", "on", "or", "ra", "ric", "yn"],
    patterns: ["se", "sme", "sse", "smee"]
  },
  dwarf: {
    label: "dwarven",
    starts: ["bal", "bar", "bor", "bram", "dag", "dor", "drak", "far", "gar", "grom", "har", "kar", "mor", "rag", "thor", "vor"],
    middles: ["a", "o", "u", "ar", "or", "ur", "grim", "dr"],
    ends: ["ak", "ar", "din", "dor", "drin", "gar", "grim", "rik", "run", "var"],
    patterns: ["se", "sme", "sse"]
  },
  elf: {
    label: "elven",
    starts: ["ae", "ala", "cae", "ela", "fae", "ila", "lae", "lia", "nae", "syl", "tha", "vael", "yel"],
    middles: ["ri", "li", "na", "the", "vae", "sie", "iel", "ara"],
    ends: ["ael", "anna", "ara", "eth", "iel", "ion", "ira", "ith", "riel", "wen", "wyn"],
    patterns: ["se", "sme", "smee", "sse"]
  },
  orc: {
    label: "orcish",
    starts: ["br", "drog", "gar", "gra", "gruk", "kr", "kro", "morg", "rag", "skar", "thrak", "urg", "vor", "zug"],
    middles: ["a", "o", "u", "ra", "og", "uk", "arg"],
    ends: ["ak", "ash", "gar", "goth", "gul", "ok", "rak", "ug", "uk", "ush"],
    patterns: ["se", "sme", "sse"]
  },
  troll: {
    label: "troll",
    starts: ["bog", "brum", "drog", "grol", "grum", "krag", "mug", "og", "rag", "skum", "thog", "trug"],
    middles: ["a", "o", "u", "um", "og", "rag"],
    ends: ["bog", "gak", "grom", "mok", "rug", "th", "ug", "um"] ,
    patterns: ["se", "sme", "sse"]
  },
  undead: {
    label: "undead",
    starts: ["az", "dre", "esh", "kael", "mal", "mor", "nec", "nyr", "oth", "sev", "va", "vel", "xar", "zyr"],
    middles: ["a", "e", "i", "y", "ae", "eth", "or", "ul"],
    ends: ["ath", "ek", "eth", "is", "ith", "os", "oth", "ul", "yr"] ,
    patterns: ["se", "sme", "smee"]
  },
  erudite: {
    label: "erudite",
    starts: ["ael", "cyr", "elo", "ira", "lyr", "mera", "nex", "ora", "qua", "sai", "theo", "vera", "xeno", "zea"],
    middles: ["ri", "the", "lo", "ae", "io", "en", "ora", "qu"],
    ends: ["a", "aes", "ian", "ion", "is", "or", "os", "um", "ys"] ,
    patterns: ["se", "sme", "smee", "ssme"]
  },
  fairy: {
    label: "fae",
    starts: ["bri", "eli", "fai", "fli", "lili", "miri", "nix", "peri", "pim", "syl", "twi", "win"],
    middles: ["a", "i", "ee", "li", "ri", "wi", "ara"],
    ends: ["bell", "belle", "et", "ette", "ia", "iel", "in", "linn", "moss", "petal", "wyn"] ,
    patterns: ["se", "sme", "smee"]
  },
  catfolk: {
    label: "catfolk",
    starts: ["ari", "bast", "fel", "kesh", "mau", "mira", "nari", "nyan", "purr", "sah", "simi", "tali", "zuri"],
    middles: ["a", "i", "u", "ra", "mi", "sha", "ya"],
    ends: ["a", "ari", "esh", "i", "in", "ira", "is", "ra", "ri", "ya"] ,
    patterns: ["se", "sme", "smee"]
  },
  goblin: {
    label: "goblin",
    starts: ["bik", "fiz", "gib", "grib", "kik", "nib", "rik", "skit", "snag", "tik", "wix", "zib"],
    middles: ["a", "i", "o", "ee", "ik", "iz", "ob"],
    ends: ["bit", "ik", "it", "nix", "nok", "sk", "sprok", "tik", "zle"] ,
    patterns: ["se", "sme", "sse"]
  },
  dragonborn: {
    label: "draconic",
    starts: ["arj", "dra", "gar", "ka", "khar", "ra", "rhaz", "sar", "thar", "tor", "vyr", "zar"],
    middles: ["a", "o", "u", "ar", "az", "ir", "or", "yr"],
    ends: ["ax", "azar", "esh", "ion", "ir", "or", "oth", "rax", "yr"] ,
    patterns: ["se", "sme", "smee"]
  },
  demon: {
    label: "demonic",
    starts: ["az", "bel", "dra", "ez", "kaz", "mal", "mor", "naaz", "raz", "sev", "vex", "xal", "zha"],
    middles: ["a", "e", "i", "o", "ae", "az", "or", "ul"],
    ends: ["ael", "ath", "ax", "iel", "oth", "ul", "us", "yx", "zar"] ,
    patterns: ["se", "sme", "smee"]
  },
  angelic: {
    label: "celestial",
    starts: ["ael", "aur", "cael", "eli", "ira", "lum", "ora", "rapha", "sere", "sol", "thea", "val"],
    middles: ["a", "e", "i", "ia", "iel", "ora", "uri"],
    ends: ["a", "ael", "iel", "iel", "ion", "ira", "ius", "ora", "uel"] ,
    patterns: ["se", "sme", "smee"]
  },
  construct: {
    label: "constructed",
    starts: ["aeg", "brass", "cog", "gear", "iron", "mek", "mod", "prism", "tek", "unit", "val", "vox"],
    middles: ["a", "i", "o", "ar", "en", "ix", "on"],
    ends: ["a", "ex", "ion", "ix", "or", "os", "um", "unit", "us"] ,
    patterns: ["se", "sme", "sse"]
  },
  other: {
    label: "unusual",
    starts: ["ae", "chi", "esh", "io", "kha", "qir", "sai", "ula", "vho", "xai", "yra", "zhe"],
    middles: ["a", "e", "i", "o", "u", "ae", "io", "yr"],
    ends: ["ae", "esh", "i", "oa", "oth", "q", "ul", "yx", "zai"] ,
    patterns: ["se", "sme", "smee", "ssme"]
  }
};

const soundPalettes = {
  soft: {
    starts: ["el", "l", "m", "n", "s", "v"],
    middles: ["ia", "li", "ri", "ae"],
    ends: ["a", "iel", "ira", "en", "eth"]
  },
  hard: {
    starts: ["br", "dr", "gr", "k", "kr", "th", "v"],
    middles: ["ar", "or", "ur", "rak"],
    ends: ["ak", "ar", "ok", "or", "rax"]
  },
  shadow: {
    starts: ["ny", "sev", "vex", "x", "z", "zh"],
    middles: ["yr", "eth", "oth", "ul"],
    ends: ["ath", "ith", "oth", "yx", "yr"]
  },
  arcane: {
    starts: ["ae", "cyr", "q", "sai", "xen", "zea"],
    middles: ["io", "ae", "the", "qu", "yr"],
    ends: ["ion", "is", "or", "um", "ys"]
  },
  nature: {
    starts: ["bri", "fae", "lor", "oak", "syl", "ver", "wyn"],
    middles: ["ara", "eli", "ora", "wyn"],
    ends: ["a", "en", "iel", "leaf", "wen", "wyn"]
  },
  swift: {
    starts: ["ki", "ni", "ri", "si", "ti", "zi"],
    middles: ["i", "ix", "iri"],
    ends: ["i", "ik", "is", "ix", "yn"]
  },
  ancient: {
    starts: ["ath", "eld", "ora", "thal", "ur", "vael"],
    middles: ["ae", "ora", "th", "ul"],
    ends: ["ael", "ion", "oth", "us", "yr"]
  }
};

const styleEndings = {
  masculine: ["an", "ar", "en", "or", "ric", "us"],
  feminine: ["a", "ara", "elle", "ia", "ira", "wyn"],
  neutral: ["el", "en", "is", "ryn", "yn"],
  other: ["ae", "esh", "oa", "yx", "zai"]
};

const influenceMap = {
  tank: "hard", dps: "hard", strong: "hard", robust: "hard", brutal: "hard",
  fire: "hard", metal: "hard", blood: "hard", evil: "hard", fierce: "hard",
  violent: "hard", armored: "hard", giant: "hard", scarred: "hard", rough: "hard",
  warrior: "hard", powerful: "hard", ugly: "hard", tall: "hard",

  healer: "soft", support: "soft", buffer: "soft", elegant: "soft", wise: "soft",
  good: "soft", light: "soft", water: "soft", air: "soft", spirit: "soft",
  redeemed: "soft", gentle: "soft", kind: "soft", graceful: "soft",
  beautiful: "soft", calm: "soft", holy: "soft", radiant: "soft", cheerful: "soft",

  rogue: "shadow", debuffer: "shadow", mysterious: "shadow", dark: "shadow",
  shadow: "shadow", poison: "shadow", corrupted: "shadow", unknown: "shadow",
  ice: "shadow", stealthy: "shadow", secretive: "shadow", cursed: "shadow",
  sinister: "shadow", venom: "shadow", ghost: "shadow", night: "shadow",

  mage: "arcane", summoner: "arcane", psychic: "arcane", arcane: "arcane",
  time: "arcane", clever: "arcane", scholarly: "arcane", magical: "arcane",
  cosmic: "arcane", dream: "arcane", illusion: "arcane", music: "arcane",
  gravity: "arcane",

  ranger: "nature", nature: "nature", earth: "nature", wild: "nature",
  forest: "nature", animal: "nature", plant: "nature", earthy: "nature",
  mushroom: "nature",

  noble: "ancient", ancient: "ancient", lawful: "ancient", royal: "ancient",
  old: "ancient", immortal: "ancient", honorable: "ancient", regal: "ancient",

  quick: "swift", small: "swift", chaotic: "swift", electric: "swift",
  mercenary: "hard", agile: "swift", fast: "swift", tiny: "swift",
  playful: "swift", lightning: "swift", storm: "swift"
};

const resultMessages = {
  similar: "A close relative of the previous name, keeping part of its rhythm or sound.",
  direction: "A different phonetic route through the same character description.",
  generated: "Shaped by the character details without turning them into a literal label.",
  ordinary: "A perfectly adequate name for a completely unspecified hero."
};

const form = document.querySelector("#character-form");
const resultStage = document.querySelector("#result-stage");
const resultKicker = document.querySelector("#result-kicker");
const generatedName = document.querySelector("#generated-name");
const resultNote = document.querySelector("#result-note");
const resultActions = document.querySelector("#result-actions");
const whyBox = document.querySelector("#why-box");
const whyText = document.querySelector("#why-text");
const similarButton = document.querySelector("#similar-button");
const directionButton = document.querySelector("#direction-button");
const saveButton = document.querySelector("#save-button");
const shortlistElement = document.querySelector("#shortlist");
const shortlistEmpty = document.querySelector("#shortlist-empty");
const shortlistCount = document.querySelector("#shortlist-count");
const toast = document.querySelector("#toast");

let currentResult = null;
let usedNames = new Set();
let shortlist = loadShortlist();
let toastTimer;

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function chance(probability) {
  return Math.random() < probability;
}

function weightedPool(base, extras = [], extraWeight = 2) {
  const pool = [...base];
  for (const item of extras) {
    for (let i = 0; i < extraWeight; i += 1) pool.push(item);
  }
  return pool;
}

function getFieldValue(selector) {
  const field = form.querySelector(selector);
  return field ? field.value : "";
}

function parseOpenList(value) {
  return [...new Set(
    value
      .split(/[,;\n]+/)
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean)
      .slice(0, 8)
  )];
}

function getConfig() {
  return {
    race: getFieldValue("#race"),
    role: getFieldValue("#role"),
    nameStyle: getFieldValue("#name-style"),
    alignment: getFieldValue("#alignment"),
    traits: parseOpenList(getFieldValue("#traits")),
    elements: parseOpenList(getFieldValue("#elements")),
    inspiration: getFieldValue("#inspiration").trim()
  };
}

function isEmptyConfig(config) {
  return !config.race && !config.role && !config.nameStyle && !config.alignment &&
    config.traits.length === 0 && config.elements.length === 0 && !config.inspiration;
}

function getInfluenceFamily(value) {
  const normalized = normalizeInspiration(value);
  if (!normalized) return "";

  if (influenceMap[normalized]) {
    return influenceMap[normalized];
  }

  const words = normalized.split(/[\s-]+/);
  for (const word of words) {
    if (influenceMap[word]) {
      return influenceMap[word];
    }
  }

  return "";
}

function getInfluences(config) {
  const raw = [config.role, config.alignment, ...config.traits, ...config.elements].filter(Boolean);
  const counts = new Map();

  for (const value of raw) {
    const family = getInfluenceFamily(value);
    if (family) counts.set(family, (counts.get(family) || 0) + 1);
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([family]) => family);
}

function normalizeInspiration(value) {
  return value.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim();
}

function hashString(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0);
}

function inspirationFragment(value) {
  const clean = normalizeInspiration(value);
  if (!clean) return "";

  const compact = clean.replace(/[\s-]+/g, "");
  const mappings = [
    ["a", "ae"], ["b", "br"], ["c", "ka"], ["d", "dr"], ["e", "el"], ["f", "fa"],
    ["g", "ga"], ["h", "ha"], ["i", "ia"], ["j", "ja"], ["k", "ka"], ["l", "li"],
    ["m", "ma"], ["n", "na"], ["o", "or"], ["p", "pe"], ["q", "qua"], ["r", "ra"],
    ["s", "sa"], ["t", "tha"], ["u", "ur"], ["v", "va"], ["w", "wyn"], ["x", "xai"],
    ["y", "yr"], ["z", "za"]
  ];
  const map = Object.fromEntries(mappings);
  const hash = hashString(clean);
  const chosenIndex = hash % Math.max(compact.length, 1);
  const letter = compact[chosenIndex] || compact[0];
  let fragment = map[letter] || "";

  if (compact.length > 3 && hash % 3 === 0) {
    const second = compact[(chosenIndex + 2) % compact.length];
    fragment += (map[second] || "").slice(0, 1);
  }

  return fragment;
}

function buildPools(profile, config, mode) {
  const families = getInfluences(config);
  const starts = [...profile.starts];
  const middles = [...profile.middles];
  const ends = [...profile.ends];

  families.slice(0, mode === "direction" ? 3 : 2).forEach((family, index) => {
    const palette = soundPalettes[family];
    if (!palette) return;
    const weight = index === 0 ? 3 : 2;
    starts.push(...Array(weight).fill(palette.starts).flat());
    middles.push(...Array(weight).fill(palette.middles).flat());
    ends.push(...Array(weight).fill(palette.ends).flat());
  });

  if (config.nameStyle && styleEndings[config.nameStyle]) {
    ends.push(...styleEndings[config.nameStyle], ...styleEndings[config.nameStyle]);
  }

  const inspired = inspirationFragment(config.inspiration);
  if (inspired) {
    starts.push(inspired, inspired);
    middles.push(inspired.slice(0, Math.min(3, inspired.length)));
  }

  const customSoundValues = [...config.traits, ...config.elements]
    .filter((value) => !getInfluenceFamily(value))
    .slice(0, 3);

  const customFragments = customSoundValues
    .map(inspirationFragment)
    .filter(Boolean);

  for (const fragment of customFragments) {
    starts.push(fragment);
    middles.push(fragment.slice(0, Math.min(3, fragment.length)));
  }

  return { starts, middles, ends, families, inspired, customFragments };
}

function applyPattern(pattern, fragments) {
  const tokenMap = {
    s: fragments.start,
    m: fragments.middle,
    e: fragments.end
  };

  return [...pattern].map((token) => tokenMap[token] || "").join("");
}

function softenJoins(value) {
  let name = value.toLowerCase();
  name = name.replace(/([aeiouy])\1{1,}/g, "$1");
  name = name.replace(/([^aeiouy])\1{2,}/g, "$1$1");
  name = name.replace(/([aeiouy]{3,})/g, (match) => match.slice(0, 2));
  name = name.replace(/([bcdfghjklmnpqrstvwxyz]{4,})/g, (match) => `${match.slice(0, 2)}a${match.slice(2)}`);
  name = name.replace(/^(.)\1/, "$1");
  name = name.replace(/(.)\1$/, "$1");
  return name;
}

function titleCaseName(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function scoreName(name, config) {
  const lower = name.toLowerCase();
  let score = 100;
  const length = lower.length;

  if (length < 4) score -= (4 - length) * 18;
  if (length > 12) score -= (length - 12) * 7;
  if (/[^aeiouy]{4}/.test(lower)) score -= 25;
  if (/[aeiouy]{3}/.test(lower)) score -= 18;
  if (/(.)\1\1/.test(lower)) score -= 30;
  if (/^(aa|ee|ii|oo|uu)/.test(lower)) score -= 12;
  if (/(aeae|arar|oror|unun|isis)/.test(lower)) score -= 18;
  if (usedNames.has(lower)) score -= 80;

  const raceLengthTargets = {
    fairy: [4, 9], goblin: [4, 9], troll: [4, 9], dwarf: [5, 10],
    elf: [6, 12], erudite: [6, 13], angelic: [6, 13], dragonborn: [6, 12]
  };
  const [min, max] = raceLengthTargets[config.race] || [5, 11];
  if (length >= min && length <= max) score += 10;

  return score + Math.random() * 8;
}

function mutateFragment(fragment) {
  if (!fragment || fragment.length < 2) return fragment;
  const vowelSwaps = { a: "e", e: "i", i: "a", o: "u", u: "o", y: "i" };
  const chars = [...fragment];
  const vowelIndex = chars.findIndex((char) => vowelSwaps[char]);
  if (vowelIndex >= 0 && chance(0.7)) chars[vowelIndex] = vowelSwaps[chars[vowelIndex]];
  return chars.join("");
}

function generateFantasy(config, mode = "generated", reference = null) {
  const profile = profiles[config.race] || profiles.generic;
  const pools = buildPools(profile, config, mode);
  const candidates = [];

  for (let attempt = 0; attempt < 45; attempt += 1) {
    let pattern = randomItem(profile.patterns);
    let start = randomItem(pools.starts);
    let middle = randomItem(pools.middles);
    let end = randomItem(pools.ends);
    let anchor = "";

    if (mode === "similar" && reference?.meta) {
      pattern = chance(0.72) ? reference.meta.pattern : pattern;
      const keepStart = chance(0.5);
      if (keepStart) {
        start = chance(0.72) ? reference.meta.start : mutateFragment(reference.meta.start);
        anchor = "opening sound";
      } else {
        end = chance(0.72) ? reference.meta.end : mutateFragment(reference.meta.end);
        anchor = "ending sound";
      }
      if (chance(0.3)) middle = reference.meta.middle;
    }

    if (mode === "direction") {
      const alternatives = profile.patterns.filter((item) => item !== reference?.meta?.pattern);
      pattern = randomItem(alternatives.length ? alternatives : profile.patterns);
      if (reference?.meta) {
        const avoidStart = reference.meta.start;
        const avoidEnd = reference.meta.end;
        start = randomItem(pools.starts.filter((item) => item !== avoidStart) || pools.starts);
        end = randomItem(pools.ends.filter((item) => item !== avoidEnd) || pools.ends);
      }
    }

    let raw = applyPattern(pattern, { start, middle, end });

    if (config.inspiration && chance(mode === "similar" ? 0.35 : 0.55)) {
      const inspired = pools.inspired;
      if (inspired && !raw.startsWith(inspired)) {
        raw = chance(0.6) ? `${inspired}${raw.slice(Math.min(2, raw.length))}` : raw;
      }
    }

    const cleaned = titleCaseName(softenJoins(raw));
    const score = scoreName(cleaned, config);
    candidates.push({
      name: cleaned,
      score,
      meta: {
        pattern,
        start,
        middle,
        end,
        anchor,
        profile: profile.label,
        families: pools.families,
        inspired: pools.inspired,
        customFragments: pools.customFragments
      }
    });
  }

  candidates.sort((a, b) => b.score - a.score);
  const finalistPool = candidates.slice(0, 6);
  const result = randomItem(finalistPool);
  usedNames.add(result.name.toLowerCase());
  return result;
}

function buildWhy(config, result, mode) {
  if (isEmptyConfig(config)) return resultMessages.ordinary;

  const parts = [];
  const profileLabel = result.meta.profile || "fantasy";
  parts.push(`It begins with a ${profileLabel} sound profile`);

  if (result.meta.families?.length) {
    const familyLabels = {
      soft: "softer and more flowing sounds",
      hard: "heavier consonants",
      shadow: "darker, less familiar sounds",
      arcane: "measured arcane syllables",
      nature: "open, natural sounds",
      swift: "shorter and quicker sounds",
      ancient: "older, more formal rhythms"
    };
    const descriptions = result.meta.families.slice(0, 2).map((family) => familyLabels[family]).filter(Boolean);
    if (descriptions.length) parts.push(`leans toward ${descriptions.join(" and ")}`);
  }

  if (config.nameStyle) parts.push(`uses the selected ${config.nameStyle} name style as a light influence`);

  if (config.traits.length || config.elements.length) {
    parts.push("treats the entered traits and powers as creative cues rather than literal name pieces");
  }

  if (result.meta.customFragments?.length) {
    parts.push("borrows a small sound echo from custom words it does not recognize as a standard theme");
  }

  if (config.inspiration) parts.push(`and carries a small sound echo derived from “${config.inspiration}” rather than inserting it literally`);
  if (mode === "similar" && result.meta.anchor) parts.push(`while preserving the previous ${result.meta.anchor}`);
  if (mode === "direction") parts.push("while deliberately changing the prior construction pattern");

  return `${parts.join(", ")}.`;
}

function generate(config, mode = "generated", reference = null) {
  if (isEmptyConfig(config)) {
    const available = ordinaryNames.filter((name) => !usedNames.has(name.toLowerCase()));
    const name = randomItem(available.length ? available : ordinaryNames);
    usedNames.add(name.toLowerCase());
    return {
      name,
      config,
      mode: "ordinary",
      meta: { profile: "ordinary", pattern: "ordinary", start: name.slice(0, 1).toLowerCase(), middle: "", end: name.slice(-2).toLowerCase() }
    };
  }

  const generated = generateFantasy(config, mode, reference);
  return { ...generated, config, mode };
}

function renderResult(result) {
  currentResult = result;
  resultKicker.textContent = result.mode === "ordinary" ? "No details. No problem." : "Name forged";
  generatedName.textContent = result.name;
  resultNote.textContent = resultMessages[result.mode] || resultMessages.generated;
  whyText.textContent = buildWhy(result.config, result, result.mode);
  resultActions.hidden = false;
  whyBox.hidden = false;

  resultStage.classList.remove("generated");
  requestAnimationFrame(() => resultStage.classList.add("generated"));

  if (window.matchMedia("(max-width: 760px)").matches) {
    resultStage.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1900);
}

function saveShortlist() {
  sessionStorage.setItem("character-name-shortlist", JSON.stringify(shortlist));
}

function loadShortlist() {
  try {
    const parsed = JSON.parse(sessionStorage.getItem("character-name-shortlist") || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCurrentName() {
  if (!currentResult) return;
  if (shortlist.some((item) => item.name.toLowerCase() === currentResult.name.toLowerCase())) {
    showToast("That name is already on the shortlist.");
    return;
  }

  shortlist.push({
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    name: currentResult.name,
    config: currentResult.config,
    meta: currentResult.meta,
    final: false
  });
  saveShortlist();
  renderShortlist();
  showToast(`${currentResult.name} saved.`);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.append(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  showToast(`${text} copied.`);
}

function renderShortlist() {
  shortlistElement.innerHTML = "";
  shortlistEmpty.hidden = shortlist.length > 0;
  shortlistCount.textContent = String(shortlist.length);

  for (const item of shortlist) {
    const li = document.createElement("li");
    li.className = `shortlist-item${item.final ? " final" : ""}`;
    li.dataset.id = item.id;

    const nameRow = document.createElement("div");
    nameRow.className = "shortlist-name-row";

    const nameButton = document.createElement("button");
    nameButton.type = "button";
    nameButton.className = "shortlist-name";
    nameButton.textContent = item.name;
    nameButton.dataset.action = "load";
    nameButton.title = "Show this name again";
    nameRow.append(nameButton);

    if (item.final) {
      const badge = document.createElement("span");
      badge.className = "final-badge";
      badge.textContent = "Final";
      nameRow.append(badge);
    }

    const actions = document.createElement("div");
    actions.className = "shortlist-actions";
    const actionData = [
      ["copy", "Copy"],
      ["similar", "Similar"],
      ["final", item.final ? "Unselect" : "Select final"],
      ["remove", "Remove"]
    ];

    for (const [action, label] of actionData) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `shortlist-action${action === "remove" ? " remove" : ""}`;
      button.dataset.action = action;
      button.textContent = label;
      actions.append(button);
    }

    li.append(nameRow, actions);
    shortlistElement.append(li);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderResult(generate(getConfig(), "generated"));
});

form.addEventListener("reset", () => {
  window.setTimeout(() => {
    currentResult = null;
    generatedName.textContent = "?";
    resultKicker.textContent = "The forge is ready.";
    resultNote.textContent = "Choose as much or as little as you like, then generate a name.";
    resultActions.hidden = true;
    whyBox.hidden = true;
  }, 0);
});

similarButton.addEventListener("click", () => {
  if (!currentResult) return;
  renderResult(generate(currentResult.config, "similar", currentResult));
});

directionButton.addEventListener("click", () => {
  if (!currentResult) return;
  renderResult(generate(currentResult.config, "direction", currentResult));
});

saveButton.addEventListener("click", saveCurrentName);

shortlistElement.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  const itemElement = event.target.closest(".shortlist-item");
  if (!button || !itemElement) return;

  const item = shortlist.find((entry) => entry.id === itemElement.dataset.id);
  if (!item) return;

  const reference = { name: item.name, config: item.config, meta: item.meta, mode: "saved" };

  if (button.dataset.action === "copy") copyText(item.name);
  if (button.dataset.action === "load") renderResult(reference);
  if (button.dataset.action === "similar") renderResult(generate(item.config, "similar", reference));
  if (button.dataset.action === "remove") {
    shortlist = shortlist.filter((entry) => entry.id !== item.id);
    saveShortlist();
    renderShortlist();
  }
  if (button.dataset.action === "final") {
    const willSelect = !item.final;
    shortlist = shortlist.map((entry) => ({ ...entry, final: willSelect && entry.id === item.id }));
    saveShortlist();
    renderShortlist();
    showToast(willSelect ? `${item.name} selected as final.` : "Final selection cleared.");
  }
});

shortlist.forEach((item) => usedNames.add(item.name.toLowerCase()));
renderShortlist();
