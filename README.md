# TriGrove Consulting Website

This is a static website for TriGrove Consulting, built with [Eleventy (11ty)](https://www.11ty.dev/).

## Project Structure

- `src/content/`: Markdown files for pages (Home, Services, Advisors, Approach, Contact).
- `src/_data/`: JSON data files for Services (`services.json`) and Advisors (`advisors.json`).
- `src/_includes/`: Layouts (`base.njk`) and components (`header.njk`, `footer.njk`).
- `src/assets/`: CSS and images.
- `eleventy.config.js`: Site configuration.

## How to Edit Content

### Editing Pages
1. Navigate to `src/content/`.
2. Open the `.md` file for the page you want to edit.
3. Update the text content. The layout is handled automatically.

### Adding Services
1. Open `src/_data/services.json`.
2. Add a new object to the list:
   ```json
   {
     "title": "New Service",
     "description": "Description here.",
     "icon": "icon-name",
     "featured": true,
     "category": "Category Name"
   }
   ```

### Adding Advisors
1. Open `src/_data/advisors.json`.
2. Add a new object to the list:
   ```json
   {
     "name": "Advisor Name",
     "title": "Job Title",
     "bio": "Bio text...",
     "tags": ["Tag1", "Tag2"],
     "image": "/assets/images/advisor-name.jpg"
   }
   ```

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run local server:
   ```bash
   npm start
   ```
   Access the site at `http://localhost:8080`.

## Deployment

This site is ready for GitHub Pages.
1. Commit changes to your repository.
2. Configure GitHub Pages to build from the repository (via Actions) or strictly from the `public` folder if you commit the build output.
   - **Recommended**: Use the standard Eleventy GitHub Action to build and deploy to `gh-pages` branch.

To build manually:
```bash
npm run build
```
The output will be in the `public/` directory.
