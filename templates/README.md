# Templates Directory

This directory contains templates for creating consistent layouts across the website. These templates provide a left vertical navigation sidebar for topic-based content sections, making navigation easier for users as more pages are added.

## Available Templates

1. `sidebar_template.html` - Main section index page template with navigation sidebar
2. `content_page_template.html` - Template for individual topic pages within a section

## Sidebar Template

The `sidebar_template.html` file provides the structure for the main index page of a new section.

### How to Use the Sidebar Template

1. When creating a new section (similar to the Trino section), copy the `sidebar_template.html` file to your new section directory.
2. Rename the file to `index.html` in your new section directory.
3. Replace all instances of `SECTION_NAME` with your actual section name.
4. Update the navigation links in the sidebar to match your planned content.
5. Update the main content as needed.

## Content Page Template

The `content_page_template.html` file provides the structure for individual topic pages within a section.

### How to Use the Content Page Template

1. Copy the `content_page_template.html` file to your section directory.
2. Rename the file to match your topic (e.g., `your_section_001.html`).
3. Replace all instances of `SECTION_NAME` with your actual section name.
4. Replace `TOPIC_TITLE` with your actual topic title.
5. Update the navigation links in the sidebar to match your section's content.
6. Make sure to update the `active` class in the navigation to highlight the current page.
7. Replace the placeholder content with your actual content.

### Template Features

- Left vertical navigation sidebar that displays all child links
- Responsive design that works on mobile devices
- Consistent styling with the rest of the website
- Easy navigation between topics and back to the home page
- Highlight boxes for important information
- Navigation links to move between topics

### Updating the Active Navigation Link

Make sure to update the `active` class in the navigation to highlight the current page:

```html
<!-- Example of updating the active class for a specific page -->
<ul class="nav-links">
    <li><a href="index.html">Overview</a></li>
    <li><a href="your_section_001.html" class="active">your_section_001</a></li>
    <li><a href="#">your_section_002</a></li>
</ul>
```

These templates ensure consistent navigation and styling across all sections of the website, making it easier for users to browse content as more pages are added.