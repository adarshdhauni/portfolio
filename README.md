<div align="center">
  <img src="public/favicon.svg" width="64" height="64" alt="Adarsh Dhauni logo" />

  <h1>Portfolio</h1>

  <p>
    <strong>The personal website of Adarsh Dhauni</strong><br/>
    A fast, accessible, SEO-optimized portfolio built with React and Vite to showcase projects, technical skills, and professional experience.
  </p>

  <p>
    <a href="https://portfolio-xi-silk-b3un2mc452.vercel.app/">
      <img src="https://img.shields.io/badge/Live-Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
    <a href="LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-18181B?style=for-the-badge" alt="MIT License" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white" alt="React Router" />
  </p>
</div>

<div align="center">

[Features](#features) •
[Tech Stack](#tech-stack) •
[Screenshots](#screenshots) •
[Getting Started](#getting-started) •
[Contact](#contact)

</div>

---

<details>
<summary><strong>Table of Contents</strong></summary>

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Why I Built This](#why-i-built-this)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Lighthouse Scores](#lighthouse-scores)
- [Performance Optimizations](#performance-optimizations)
- [Accessibility](#accessibility)
- [SEO](#seo)
- [Responsive Design](#responsive-design)
- [Theme Support](#theme-support)
- [Components](#components)
- [Custom Hooks](#custom-hooks)
- [Engineering Decisions](#engineering-decisions)
- [Challenges & Solutions](#challenges--solutions)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Statistics](#project-statistics)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Connect With Me](#connect-with-me)

</details>

---

# Overview

**Portfolio** is a modern, single-page portfolio website built with **React 19** and **Vite**.

It was designed to present my projects, technical skills, and professional background through a clean, responsive, and high-performance user experience.

Unlike many portfolio websites, this project focuses on engineering quality as much as visual presentation. Every section is component-driven, content is centralized for easy maintenance, images are optimized for fast loading, accessibility is considered throughout, and the application is structured to achieve excellent Lighthouse scores.

The project is intentionally **frontend-only**—there is no backend, authentication, or database. Every interaction is static, allowing the site to remain lightweight, fast, and easy to deploy.

---

# Live Demo

### **🌐 https://portfolio-xi-silk-b3un2mc452.vercel.app/**

Deployed on **Vercel** directly from this repository.

---

# Features

## Portfolio

- Modern landing hero
- About section
- Technical skills showcase
- Education & learning timeline
- Featured projects
- Contact section
- Resume download

## User Experience

- Sticky navigation
- Active section highlighting
- Smooth scrolling
- Mobile navigation drawer
- Responsive layouts
- Scroll-triggered animations

## Theme

- Light mode
- Dark mode
- System preference detection
- Theme persistence

## Performance

- Responsive WebP images
- `srcSet` & `sizes`
- Lazy loading
- High-priority hero image
- Memoized layout components
- Optimized bundle structure

## SEO

- Dynamic metadata
- Open Graph tags
- Twitter cards
- Canonical URLs
- robots.txt
- sitemap.xml
- Web App Manifest

## Reliability

- Error Boundary
- Custom fallback UI
- Custom 404 page

---

# Why I Built This

A portfolio should demonstrate engineering quality—not just describe it.

I built this project to create a portfolio that is fast, maintainable, accessible, and production-ready. Every design decision was made with long-term maintainability and real-world performance in mind, from reusable component architecture and centralized content management to responsive image loading and SEO optimization.

Rather than relying on unnecessary complexity, the project focuses on delivering an excellent user experience through clean architecture, thoughtful performance optimizations, and modern frontend best practices.

---

# Tech Stack

<table>
<tr>

<td valign="top" width="50%">

### Frontend

![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)

![JavaScript](https://img.shields.io/badge/JavaScript-ES2025-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Styling

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

![CVA](https://img.shields.io/badge/class--variance--authority-18181B?style=flat-square)

![clsx](https://img.shields.io/badge/clsx-18181B?style=flat-square)

![tailwind-merge](https://img.shields.io/badge/tailwind--merge-18181B?style=flat-square)

### Routing

![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)

### UI

![Base UI](https://img.shields.io/badge/Base_UI-18181B?style=flat-square)

![Sonner](https://img.shields.io/badge/Sonner-18181B?style=flat-square)

![lucide-react](https://img.shields.io/badge/lucide--react-18181B?style=flat-square&logo=lucide&logoColor=white)

![react-icons](https://img.shields.io/badge/react--icons-18181B?style=flat-square)

![next-themes](https://img.shields.io/badge/next--themes-18181B?style=flat-square)

</td>

<td valign="top" width="50%">

### Animation

![AOS](https://img.shields.io/badge/AOS-18181B?style=flat-square)

### SEO

![react-helmet-async](https://img.shields.io/badge/react--helmet--async-18181B?style=flat-square)

### Error Handling

![react-error-boundary](https://img.shields.io/badge/react--error--boundary-18181B?style=flat-square)

### Tooling

![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white)

![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)

![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)

### Deployment

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</td>

</tr>
</table>

> [!NOTE]
> Framer Motion remains listed as a dependency for future experimentation but is not currently used. All animations are implemented with **AOS** to keep the production bundle smaller and maintain excellent runtime performance.

---

## Architecture Overview

The application intentionally avoids unnecessary complexity. There is no global state management, client-side data fetching, or caching layer because all content is static. Local component state is only used where required, such as the mobile navigation in `Navbar.jsx` and mount state handling in `ThemeToggle.jsx` to prevent hydration mismatches.

```mermaid
flowchart TD
    A[main.jsx] --> B["App.jsx<br/>initializes AOS + routes"]
    B --> C{React Router}
    C -->|Home route| D["MainLayout.jsx<br/>Navbar + Footer shell"]
    C -->|Unmatched route| E[404 Page]
    D --> F[Home.jsx]
    F --> G[Hero]
    F --> H[About]
    F --> I[Skills]
    F --> J[Projects]
    F --> K[Education]
    F --> L[Contact]
    B -.wraps.-> M[ErrorBoundary.jsx]
```

There's no global state library — the only stateful UI lives locally in `Navbar.jsx` (mobile drawer open/close) and `ThemeToggle.jsx` (mount readiness for the theme switch). There's no data-fetching layer, no caching, and no Suspense-based lazy loading; content is static, so none of that is needed yet.

---

## Folder Structure

```text
portfolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── manifest.webmanifest
│   ├── og-image.jpg
│   ├── resume.pdf
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   ├── images/
│   │   │   ├── profile-400.webp
│   │   │   ├── profile-600.webp
│   │   │   ├── profile-800.webp
│   │   │   ├── projects/
│   │   │   │   ├── ecommerce-600.webp
│   │   │   │   ├── ecommerce-900.webp
│   │   │   │   └── ecommerce-1200.webp
│   │   │   └── screenshots/
│   │   │       ├── desktop/
│   │   │       └── mobile/
│   │   └── resume/
│   │       └── resume.docx
│   ├── components/
│   │   ├── common/       # Section wrappers, heading, SEO, cards, theme/error handling
│   │   ├── layout/       # Navbar, footer, page wrapper, container
│   │   ├── sections/     # Hero, About, Skills, Projects, Education, Contact
│   │   └── ui/           # Base UI + Tailwind primitives
│   ├── constants/        # Nav links, projects, skills, contact links, learning roadmap, site config
│   ├── hooks/             # Active-section tracking, scroll state
│   ├── lib/               # Shared utility functions
│   └── pages/             # Route-level page components
├── components.json
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── package-lock.json
├── README.md
├── vercel.json
└── vite.config.js
```

---

## 📸 Screenshots

### Desktop

<table>
  <tr>
    <td align="center" width="50%">
      <img src="src/assets/images/screenshots/desktop/desktop-hero.png" alt="Hero" width="100%">
      <br><sub><b>Hero</b></sub>
    </td>
    <td align="center" width="50%">
      <img src="src/assets/images/screenshots/desktop/desktop-skills.png" alt="Skills" width="100%">
      <br><sub><b>Skills</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="src/assets/images/screenshots/desktop/desktop-projects.png" alt="Projects" width="100%">
      <br><sub><b>Projects</b></sub>
    </td>
    <td align="center">
      <img src="src/assets/images/screenshots/desktop/desktop-education.png" alt="Education" width="100%">
      <br><sub><b>Education</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="src/assets/images/screenshots/desktop/desktop-contact.png" alt="Contact" width="100%">
      <br><sub><b>Contact</b></sub>
    </td>
    <td align="center">
      <img src="src/assets/images/screenshots/desktop/desktop-darkMode.png" alt="Dark Mode" width="100%">
      <br><sub><b>Dark Mode</b></sub>
    </td>
  </tr>
</table>

---

### Mobile

<table>
  <tr>
    <td align="center" width="50%">
      <img src="src/assets/images/screenshots/mobile/mobile-navigation.png" alt="Navigation" width="100%">
      <br><sub><b>Navigation</b></sub>
    </td>
    <td align="center" width="50%">
      <img src="src/assets/images/screenshots/mobile/mobile-hero.png" alt="Hero" width="100%">
      <br><sub><b>Hero</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="src/assets/images/screenshots/mobile/mobile-skills.png" alt="Skills" width="100%">
      <br><sub><b>Skills</b></sub>
    </td>
    <td align="center">
      <img src="src/assets/images/screenshots/mobile/mobile-projects.png" alt="Projects" width="100%">
      <br><sub><b>Projects</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img src="src/assets/images/screenshots/mobile/mobile-education.png" alt="Education" width="100%">
      <br><sub><b>Education</b></sub>
    </td>
    <td align="center">
      <img src="src/assets/images/screenshots/mobile/mobile-contact.png" alt="Contact" width="100%">
      <br><sub><b>Contact</b></sub>
    </td>
  </tr>

  <tr>
    <td align="center" colspan="2">
      <img src="src/assets/images/screenshots/mobile/mobile-darkMode.png" alt="Dark Mode" width="50%">
      <br><sub><b>Dark Mode</b></sub>
    </td>
  </tr>
</table>

---

## Lighthouse Scores

| Category       |                                Desktop                                 |                                 Mobile                                 |
| -------------- | :--------------------------------------------------------------------: | :--------------------------------------------------------------------: |
| Performance    | ![100](https://img.shields.io/badge/100-brightgreen?style=flat-square) |  ![97](https://img.shields.io/badge/97-brightgreen?style=flat-square)  |
| Accessibility  |  ![99](https://img.shields.io/badge/99-brightgreen?style=flat-square)  |  ![99](https://img.shields.io/badge/99-brightgreen?style=flat-square)  |
| Best Practices | ![100](https://img.shields.io/badge/100-brightgreen?style=flat-square) | ![100](https://img.shields.io/badge/100-brightgreen?style=flat-square) |
| SEO            | ![100](https://img.shields.io/badge/100-brightgreen?style=flat-square) | ![100](https://img.shields.io/badge/100-brightgreen?style=flat-square) |

---

## Performance Optimizations

- Responsive WebP images delivered through `srcSet` and `sizes` so browsers download only the most appropriate asset
- Hero image prioritized with `fetchPriority="high"` while below-the-fold content uses native lazy loading
- Memoized layout components to reduce unnecessary re-renders
- AOS configured with `once: true` so animations execute only once during a session
- Static architecture with no client-side data fetching, global state management, or caching overhead
- Production builds generated with Vite and deployed on Vercel for fast global delivery

> [!NOTE]
> Route-level code splitting, lazy-loaded page components, and server-side rendering aren't implemented yet — see [Future Improvements](#future-improvements).

---

## Accessibility

- Semantic HTML throughout the application
- ARIA labels for navigation and icon-only controls
- Keyboard-accessible interactive elements
- Visible focus indicators
- Screen-reader-only labels where appropriate
- Lighthouse Accessibility score of **99** on both desktop and mobile

> [!NOTE]
> There's no automated accessibility test suite (e.g. `axe-core`) yet — accessibility markup has been implemented manually and verified via Lighthouse, not enforced in CI.

---

## SEO

- Dynamic page titles and meta descriptions using `react-helmet-async`
- Canonical URLs
- Open Graph metadata
- Twitter Card metadata
- `robots.txt`
- `sitemap.xml`
- Web App Manifest
- Lighthouse SEO score of **100** on both desktop and mobile

---

## Responsive Design

Built with a mobile-first approach using Tailwind CSS, the interface scales seamlessly across mobile, tablet, laptop, and desktop breakpoints. Responsive images, flexible layouts, and adaptive navigation ensure a consistent experience on every screen size.

---

## Theme Support

Light and dark themes are powered by `next-themes`. The application automatically respects the user's system preference on first visit while persisting manual theme selections for subsequent sessions. Mount-aware rendering prevents visual inconsistencies during initialization.

---

## Components

| Component           | Folder     | Purpose                                                                   |
| ------------------- | ---------- | ------------------------------------------------------------------------- |
| `Hero.jsx`          | `sections` | Landing section with responsive hero image and primary CTA                |
| `Navbar.jsx`        | `layout`   | Sticky navigation with active-section highlighting and mobile drawer      |
| `MainLayout.jsx`    | `layout`   | Page shell composing navbar, main content, and footer                     |
| `Container.jsx`     | `layout`   | Memoized layout container used across sections                            |
| `Home.jsx`          | `pages`    | Composes all portfolio sections into the home route                       |
| `Seo.jsx`           | `common`   | Injects page title, meta description, canonical link, and OG/Twitter tags |
| `ThemeProvider.jsx` | `common`   | Provides light/dark theme context via `next-themes`                       |
| `ThemeToggle.jsx`   | `common`   | UI control for switching themes                                           |
| `ErrorBoundary.jsx` | `common`   | Catches runtime rendering errors                                          |
| `ErrorFallback.jsx` | `common`   | Fallback UI rendered when `ErrorBoundary` catches an error                |

Beyond these, `common`, `layout`, `sections`, and `ui` each group components by role — `ui` holds the reusable primitives built on Base UI and styled with Tailwind, used across every section.

---

## Custom Hooks

The project currently contains two custom hooks focused exclusively on client-side UI behavior:

- **Active Section Hook** — Observes the visible section during scrolling and updates navigation state accordingly.
- **Scroll State Hook** — Tracks scroll position to drive scroll-dependent UI behavior, including sticky navigation.

---

## Engineering Decisions

### Content-driven architecture

Project data, navigation links, skills, and copy are centralized in the `constants` directory instead of being embedded throughout components. This keeps presentation and content separate, making updates straightforward without modifying component logic.

### Local state over global state

The application intentionally avoids global state management. Interactive state is limited to isolated UI concerns—such as the mobile navigation drawer and theme initialization—making `useState` sufficient while avoiding unnecessary complexity.

### Component-based page composition

Rather than building the portfolio as one large component, each major section is implemented as an independent component and composed within `Home.jsx`. This improves readability, maintainability, and future extensibility.

### Intentional loading strategy

Images are loaded according to their importance. The above-the-fold hero image is prioritized using `fetchPriority="high"` for faster initial rendering, while non-critical images use native lazy loading to reduce initial network and rendering cost.

### Graceful failure handling

An Error Boundary and custom 404 page ensure runtime errors or invalid routes degrade gracefully instead of presenting users with a blank screen.

---

## Challenges & Solutions

| Challenge                                                       | Solution                                                                                                          |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Maintaining a growing single-page application                   | Modular, section-based architecture with centralized content                                                      |
| Delivering a consistent experience across devices               | Mobile-first responsive layouts with dedicated mobile navigation                                                  |
| Creating a polished UI without relying on a large design system | Reusable UI primitives, consistent spacing, custom design tokens, and Tailwind utilities                          |
| Implementing modern SEO without server-side rendering           | Client-side metadata with `react-helmet-async` alongside static `robots.txt`, `sitemap.xml`, and Web App Manifest |

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Clone the repository

```bash
git clone https://github.com/adarshdhauni/portfolio.git
cd portfolio
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

This serves the optimized production build locally before deployment.

---

## Available Scripts

| Script            | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Starts the local development server with hot reloading |
| `npm run build`   | Builds the application for production                  |
| `npm run preview` | Serves the production build locally for preview        |
| `npm run lint`    | Lints the codebase using ESLint                        |

---

## Project Statistics

| Metric                | Count |
| --------------------- | :---: |
| Total project files   |  78   |
| Source files (`src`)  |  40   |
| React components      |  24   |
| Pages                 |   2   |
| Layout components     |   5   |
| Section components    |   6   |
| Custom hooks          |   2   |
| Utility modules       |   1   |
| UI component modules  |   3   |
| Total assets          |  27   |
| Optimized WebP images |   6   |
| Backend               | None  |
| API endpoints         | None  |

---

## Deployment

The application is deployed on **Vercel** and configured through `vercel.json`.

Because this is a client-side React application, all unmatched routes are rewritten to `index.html`, allowing React Router to resolve navigation correctly and preventing 404 errors when refreshing deep links.

---

## Future Improvements

- Route-level code splitting with `React.lazy()`
- Automated accessibility testing using `axe-core`
- Unit and integration testing
- Remove or adopt Framer Motion for production animations
- TypeScript migration for stronger type safety
- Static pre-rendering or server-side rendering to improve initial rendering and SEO

---

## Contributing

Although this is primarily a personal project, feedback, issues, and suggestions are always welcome.

1. Fork the repository
2. Create a feature branch

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit your changes

   ```bash
   git commit -m "Add your feature"
   ```

4. Push your branch

   ```bash
   git push origin feature/your-feature
   ```

5. Open a Pull Request

> [!TIP]
> For larger changes, please open an issue first to discuss the proposed implementation.

---

## License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

---

## Contact

**Adarsh Dhauni**

I'm currently open to remote software engineering opportunities and always happy to discuss the project.

📧 **adarshdhauni186@gmail.com**

---

## Connect With Me

<p align="left">
  <a href="https://github.com/adarshdhauni">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/adarsh-dhauni-7146903a6/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://leetcode.com/u/Adarsh_49/">
    <img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode" />
  </a>
  <a href="https://portfolio-xi-silk-b3un2mc452.vercel.app/">
    <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
  <a href="mailto:adarshdhauni186@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

---

<div align="center">

Built with ❤️ using React, Vite, and Tailwind CSS.

**Designed, developed, and maintained by
<a href="https://github.com/adarshdhauni">Adarsh Dhauni</a>.**

</div>
