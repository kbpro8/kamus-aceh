const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

module.exports = function () {
  const dir = path.join(__dirname, "../entries");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".yaml") && !f.startsWith("_"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      return yaml.load(raw);
    })
    .sort((a, b) => a.headword.localeCompare(b.headword, "id"));
};
