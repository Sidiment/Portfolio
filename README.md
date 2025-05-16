# 🚀 Yuheng Zhao Portfolio

## 🌐 [Original Webflow Website (Click Here)](https://yuheng-zhao.webflow.io/)
## 🟦 [Static Site (GitHub Pages Version)]([https://sidiment.github.io/Yuheng-Portfolio/](https://sidiment.github.io/Portfolio/))

---

This is a static personal portfolio website for Yuheng Zhao, built to closely match the original [Webflow site](https://yuheng-zhao.webflow.io/). **This project is now 100% static—no Flask or backend code is used.**

**Folder name:** The project folder is now `portfolio-static` (previously `flask-portfolio`).

## Features
- Home page with profile photo and introduction
- Projects and Other Projects integrated on the main page
- Responsive, modern design
- Social links (Instagram, LinkedIn) and Resume in the navigation bar

## Getting Started Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Sidiment/Yuheng-Portfolio.git
   cd Yuheng-Portfolio
   ```
2. Serve the site locally (Python 3):
   ```bash
   python -m http.server 8000
   ```
3. Open [http://localhost:8000](http://localhost:8000) in your browser.

## Project Structure
- `index.html` — Main static site
- `styles.css` — Main styles
- `project-styles.css` — Project page styles
- `script.js` — Interactivity (smooth scroll, etc.)
- `images/profile.jpg` — Profile photo (must be present for the hero section)
- `projects/` — Project detail pages

---

## ⚠️ Troubleshooting & Common Issues

If you see 404 errors in your terminal or browser, check the following:
- **Missing Images:**
  - Ensure `images/profile.jpg` exists for your profile photo.
  - Project images are loaded from Webflow CDN. If you use local images, make sure they are in the `images/` folder.
- **Missing Project Pages:**
  - Make sure all project HTML files exist in the `projects/` directory.
- **Broken Links:**
  - Navigation links like `/projects`, `/photos`, `/resume` are section anchors or external links. If you want to add a real page, create the corresponding HTML file.
- **Favicon Warning:**
  - 404 for `/favicon.ico` is normal if you haven't added a favicon. You can add one as `favicon.ico` in the root directory.

**How to fix:**
- Double-check your file names and locations.
- Refresh your browser after adding missing files.
- If you update the repo, re-run the server.

---

**Note:**
- This is a static site only. All Flask and backend files have been removed.
- For any issues, check the troubleshooting section above or open an issue on GitHub. 
