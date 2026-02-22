module.exports = function (eleventyConfig) {
    // Passthrough copy for assets
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/admin");

    const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addFilter("initials", function (name) {
        if (!name) return "";
        return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    });

    // Create collections from the JSON data folders
    const fs = require("fs");
    const path = require("path");

    eleventyConfig.addCollection("advisors", function (collectionApi) {
        const dir = "src/_data/advisors_list";
        if (!fs.existsSync(dir)) return [];
        return fs.readdirSync(dir)
            .filter(file => file.endsWith('.json'))
            .map(file => JSON.parse(fs.readFileSync(path.join(dir, file), "utf8")));
    });

    eleventyConfig.addCollection("services", function (collectionApi) {
        const dir = "src/_data/services_list";
        if (!fs.existsSync(dir)) return [];
        return fs.readdirSync(dir)
            .filter(file => file.endsWith('.json'))
            .map(file => JSON.parse(fs.readFileSync(path.join(dir, file), "utf8")));
    });

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
