const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPassthroughCopy("src/assets");

  // Slugify a headword for URL use
  eleventyConfig.addFilter("slugify", (str) =>
    (str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")   // strip diacritics after decomposition
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  );

  // Group entries by first letter for A-Z index
  eleventyConfig.addFilter("byLetter", (entries) => {
    const groups = {};
    for (const entry of entries) {
      const letter = (entry.headword || "?")[0].toUpperCase();
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
