const yaml = require("js-yaml");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPassthroughCopy("src/assets");

  // Build entries collection; attach fileSlug (filename without ext) to each item
  eleventyConfig.addCollection("entries", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/entries/*.yaml")
      .filter((item) => !path.basename(item.inputPath).startsWith("_"))
      .map((item) => {
        item.data.fileSlug = path.basename(item.inputPath, ".yaml");
        return item;
      })
      .sort((a, b) =>
        (a.data.headword || "").localeCompare(b.data.headword || "", "id")
      );
  });

  // Slugify — kept for display use but no longer used for permalinks
  eleventyConfig.addFilter("slugify", (str) =>
    (str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  );

  // Group flat entry objects by first letter for A-Z index
  eleventyConfig.addFilter("byLetter", (entries) => {
    const groups = {};
    for (const entry of entries) {
      const hw = (entry.headword) || "?";
      const letter = hw[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(entry);
    }
    return Object.fromEntries(Object.entries(groups).sort());
  });

  // Pick N random entries
  eleventyConfig.addFilter("randomPick", (arr, n) => {
    const copy = [...(arr || [])];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, n);
  });

  // Return up to `n` related entries: same first letter, excluding current fileSlug
  eleventyConfig.addFilter("relatedEntries", (allEntries, currentSlug, n) => {
    const current = (allEntries || []).find((e) => e.fileSlug === currentSlug);
    const firstLetter = current
      ? (current.headword || "")[0].toUpperCase()
      : "";
    const pool = (allEntries || []).filter(
      (e) =>
        e.fileSlug !== currentSlug &&
        (e.headword || "")[0].toUpperCase() === firstLetter
    );
    // shuffle then slice
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, n || 5);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    pathPrefix: "/kamus-aceh/",
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
