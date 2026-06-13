# Balanced-Pitch-Album-Music-Website
Live at https://balanced-pitch-album-music-website.vercel.app/
Balanced Pitch Album Music Website is a React and Vite based artist website for a music project identity. The site presents Balanced Pitch as the primary artist brand, uses SoftBridge Solutions as the supporting organization, and combines editorial landing-page composition with scroll-driven motion, global audio playback, multi-page navigation, and static media delivery.

The project goal is to provide a production-ready music/album presentation surface with a strong visual identity, client-side route transitions, GSAP-based scroll behavior, and deploy-safe Vercel configuration for a static Vite build.

## Technical Overview

The application is a client-rendered React SPA built with Vite. Routing is handled in the browser through React Router, while Vercel rewrites all unmatched requests back to `index.html` so deep links such as `/about`, `/solutions`, `/updates`, and `/contact` resolve correctly after deployment.

The UI is organized as page-level feature modules and reusable component modules. Each page owns its own layout stylesheet, and cross-page primitives such as the menu, footer, transition wrapper, parallax image renderer, CTA button, music player, and global music player are isolated under `src/components`.

## Runtime Stack

- React `18.3.1` for UI composition and state-driven rendering.
- Vite `5.4.x` for ESM development, static asset handling, and production bundling.
- React Router `7.x` for client-side routing.
- GSAP `3.12.x` with `ScrollTrigger` for timeline orchestration and scroll-linked animation.
- Framer Motion `11.x` for route transition choreography.
- Lenis and `@studio-freight/react-lenis` for smooth scrolling integration.
- Plain CSS per component/page for predictable cascade and direct visual control.
- Static public asset delivery for images, logos, songs, previews, and page media.

## Application Architecture

```text
src/
  App.jsx
    Owns route mapping, document title mapping, menu state, global providers,
    global music player placement, and AnimatePresence route transitions.

  main.jsx
    Mounts the React tree into the Vite HTML shell.

  index.css
    Defines global font faces, base element resets, color tokens, typography
    primitives, and project-wide layout defaults.

  contexts/
    MusicPlayerContext.jsx
      Central audio state container. Stores track metadata, active track,
      playback state, progress state, and exposes controls consumed by local
      and global player components.

  components/
    AnimatedLink/
      Navigation link primitive with reusable animated interaction styling.

    CtaButton/
      CTA abstraction used by page sections that need consistent branded
      routing actions.

    Footer/
      Global footer with SoftBridge Solutions copyright, location block,
      mailing form markup, and page navigation links.

    GlobalMusicPlayer/
      Persistent player surface mounted outside page routes so playback UI can
      remain available during route transitions.

    Menu/
      Animated global navigation menu with light/dark logo switching,
      route links, and overlay behavior.

    MusicPlayer/
      Page-level player surface tied to the shared music player context.

    ParallaxImage/
      Image wrapper used for scroll-responsive media treatment.

    Transition/
      Higher-order page transition wrapper for consistent route entry/exit
      animation.

  pages/
    home/
      Artist landing page, hero brand block, featured audio interaction,
      scroll-driven intro, cassette/tape visual section, and latest updates.

    about/
      Narrative page for story, team, and supporting organization content.

    solutions/
      Services/data positioning page with technical offering blocks and
      SoftBridge Solutions support references.

    updates/
      Editorial updates/articles page.

    contact/
      Contact and conversion page.
```

## Branding Model

- Primary artist brand: `Balanced Pitch`
- Supporting organization: `SoftBridge Solutions`
- Author metadata: `Yunus Emre Gurlek`
- Footer copyright: `(c) 2026 SoftBridge Solutions`
- Hero treatment: large artist name with a smaller `supported by SoftBridge Solutions` line.
- Browser title model:
  - `/` -> `Balanced Pitch`
  - `/about` -> `Sobre Nos | Balanced Pitch`
  - `/solutions` -> `Solucoes | Balanced Pitch`
  - `/updates` -> `Novidades | Balanced Pitch`
  - `/contact` -> `Contato | Balanced Pitch`

## Routing and Document Title Flow

`src/App.jsx` defines a route-title lookup keyed by `location.pathname`. On route changes, the app updates `document.title` and resets scroll position after the transition delay. This keeps the browser tab artist-focused while preserving contextual page titles for secondary routes.

Route rendering is wrapped in `AnimatePresence` with `mode="wait"`, which allows outgoing page animation to complete before the next page enters. The route tree is keyed by `location.pathname`, ensuring Framer Motion receives route changes as discrete transition events.

## Animation System

The animation layer combines three concerns:

- Route transitions through the `Transition` wrapper and Framer Motion.
- Scroll-bound section choreography through GSAP and ScrollTrigger.
- Smooth scrolling through Lenis, mounted where page-level scroll behavior needs controlled interpolation.

The home page registers ScrollTrigger during mount and explicitly kills triggers during cleanup. That prevents stale triggers from accumulating when navigating between routed pages in the SPA.

Animation responsibilities are intentionally page-local when they depend on page markup. Reusable visual primitives remain component-local, which avoids global timeline coupling and makes each page easier to reason about.

## Audio State Model

`MusicPlayerContext.jsx` centralizes track and playback state. The context exposes the track list, active track data, playback status, and control methods to both embedded and global player surfaces. Static audio files and cover art are served from `public/songs`, allowing Vite to copy them into the production output without import-time bundling.

This layout keeps audio metadata close to runtime state while keeping binary media outside the JavaScript bundle.

## Asset Pipeline

All heavy visual and audio assets are stored under `public/`, which gives them stable root-relative URLs in both local and production builds. Component code references assets with absolute paths such as `/home/hero.jpg`, `/songs/dreamland.mp3`, and `/logo.png`.

This is intentional for Vercel static hosting: public assets are emitted directly, route rewrites do not affect asset paths, and media URLs remain stable across client-side route transitions.

## Styling Strategy

The project uses classic CSS files scoped by folder convention rather than CSS modules. This keeps animation selectors straightforward for GSAP and allows section-level selectors such as `.hero-header`, `.mix-tape`, `.article`, and `.footer` to remain readable from both React markup and animation code.

Global visual primitives and font definitions live in `src/index.css`. Page-specific layout and responsive rules live next to the page component. Component-specific interaction and layout rules live next to the component.

## Vercel Deployment Contract

The repository includes `vercel.json` as an explicit deployment contract:

```json
{
  "framework": "vite",
  "installCommand": "npm ci",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

The rewrite rule is required because the app uses browser-side routing. Without it, direct navigation to nested routes would ask Vercel for physical files that do not exist. With the rewrite, every route resolves to the Vite HTML shell and React Router takes over in the browser.

The output contract is `dist/`, which is Vite's static production directory. `npm ci` is used for deterministic dependency installation from `package-lock.json`.

## Repository Notes

- `node_modules/` and `dist/` are intentionally ignored.
- The committed source is enough for Vercel to install dependencies, build, and serve the app.
- The project keeps preview screenshots in `previews/` for repository documentation.
- MP3 files are intentionally stored as public static assets rather than imported modules.
- The route surface is static and does not require server functions, databases, or environment variables.

## Key Files

- `src/App.jsx`: route map, title map, global layout shell.
- `src/pages/home/Home.jsx`: primary artist hero, supported-by line, home content, ScrollTrigger setup.
- `src/pages/home/Home.css`: hero spacing, artist-support text styling, home layout rules.
- `src/contexts/MusicPlayerContext.jsx`: shared audio state and track metadata.
- `src/components/GlobalMusicPlayer/GlobalMusicPlayer.jsx`: persistent audio UI.
- `src/components/Menu/Menu.jsx`: global navigation overlay and logo behavior.
- `src/components/Footer/Footer.jsx`: footer content and SoftBridge Solutions copyright.
- `vercel.json`: static deployment and SPA fallback contract.

## License

MIT

## Author

Yunus Emre Gurlek
