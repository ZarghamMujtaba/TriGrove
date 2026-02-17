module.exports = function (eleventyConfig) {
    // Passthrough copy for assets
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/admin");

    const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    return {
        pathPrefix: "/TriGrove/",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
            data: "_data"
        }
    };
};
