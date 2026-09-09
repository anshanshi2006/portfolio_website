# Project Documentation — Personal Portfolio Website

## 1. My Details
- **Name:** Anshanshi Pandey
- **Roll Number / Batch:** 590024617,Batch-5
- **Course:**B.Tech CSE, 2nd Year, Semester 3 (UPES, Dehradun)
- **Date:** 7 September 2026

## 2. Template / Starting Point
Built from scratch — no template or boilerplate was used. I wrote the HTML structure, CSS, and JavaScript myself, using an AI assistant (Claude) to help generate and refine the code based on my instructions.

## 3. AI Tools Used
- **Claude (Anthropic)** — used to:
  - Generate the initial HTML/CSS/JS structure for the site based on the assignment requirements and my resume content.
  - Design a visual style (dark theme with red/mint accents) that reflects my interests in coding and taekwondo.
  - Write the responsive CSS (mobile nav toggle, grid layouts collapsing on smaller screens).
  - Generate this documentation file.

## 4. Prompts Used
Below are the actual prompts used to generate the site:

1. "this is my assignment and that is the content to be used. do it as the guidelines of the assignment says I want the code as well...I am in semester 3 core CSE do accordingly don't make it very much professional" (along with the assignment PDF and my resume PDF attached).

I reviewed the generated code, checked it against the assignment's section requirements, and adjusted content (project descriptions, skills, contact links) to match my resume.

## 5. Method / Approach
1. Read through the assignment PDF to note every required section: header/nav, hero, about, projects (3+), contact, footer with a download-documentation button.
2. Provided my resume as the content source so the site would reflect real projects and skills instead of placeholder text.
3. Asked Claude to generate the site with a design that isn't a generic AI-template look — landed on a dark theme referencing both software development (mint/teal accent) and taekwondo (red accent, "belt strip" detail in the hero card).
4. Built the site as three files — `index.html`, `style.css`, `script.js` — kept separate for readability instead of one large file.
5. Added a mobile navigation toggle and responsive CSS grid breakpoints so the layout adapts from desktop down to phone width.Also added my avatar in it and changed the theme accordingly.
6. Wired the footer "Download Documentation" button to this file using a plain `<a href="documentation.md" download>` link, as suggested in the assignment brief.
7. Tested the page locally (resizing the browser to check mobile/desktop layouts) before pushing to GitHub.
8. Created a public GitHub repository, uploaded `index.html`, `style.css`, `script.js`, and `documentation.md`, and enabled GitHub Pages from the repo's Settings → Pages menu (Source: main branch). 

## 6. Live Link & GitHub Repo
- **Live site:** `https://anshanshi2006.github.io/portfolio_website/` 
- **GitHub repo:** `https://github.com/anshanshi2006/portfolio_website.git`  
