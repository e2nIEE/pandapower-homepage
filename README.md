# pandapower Jekyll Theme (GitHub Pages)

PyPSA-inspired theme for pandapower.org: sticky header, hero with code sample, card grids, dark mode.

## Local preview

    bundle install
    bundle exec jekyll serve

The default `Gemfile` uses **Jekyll 4** so the site previews on modern Ruby
(3.2+, including 4.x). GitHub Pages builds the live site with its own pinned
toolchain and does not resolve gems from this `Gemfile`, so deployment is
unaffected.

## Languages (en/de)
English lives at the root, German under `/de/`. No plugin needed (works on GitHub Pages).
- UI strings: `_data/i18n.yml`; nav/feature/ecosystem texts are `{en:, de:}` maps in `_data/*.yml`
- Pages: `pages/<lang>/…` with `ref:` (same value in every language), `lang:` and an explicit `permalink:`; the language switcher and `hreflang` links use `ref`
- Posts: `_posts/` (en), `_posts/de/` (de); give translations the same `ref`
- New language: add it to `languages` in `_config.yml`, `i18n.yml`, the data files and a `defaults` scope

## Math and diagrams
MathJax 3 (LaTeX, AMS, mhchem): inline `\( x^2 \)`, display `$$ ... $$`. Disable per page with `math: false`.
Mermaid diagrams: set `mermaid: true` and use a ```mermaid code block. See `pages/en/formulas.md`.

## Fonts
Source Sans 3 (text) and Fira Code (code) are self-hosted in `assets/fonts/` (variable woff2, latin + latin-ext, SIL OFL licenses included); no requests to Google. To change fonts, swap the files, the `@font-face` rules in `assets/css/main.scss` and `--font`/`--mono` in `_sass/theme.scss`.

## Customize
- Navigation: `_data/navigation.yml`; cards: `_data/features.yml`, `_data/ecosystem.yml`
- Colors/typography: CSS variables at the top of `_sass/theme.scss` (brand green `#179c7d` from the logo; `--accent` is the darker AA-contrast variant for text/buttons)
- Logo: `assets/svg/Logo_pandapower_color-black.svg` (light backgrounds) and `Logo_pandapower_color-white.svg` (dark backgrounds) are used via `_includes/logo.html`; CSS shows the one matching the theme. `favicon.svg` is a copy of `Logo_pandapower_icon.svg`. The pandapipes icon is used in the ecosystem card (`_data/ecosystem.yml`).
- Pages in `pages/en/` and `pages/de/`, posts in `_posts/` and `_posts/de/`; the home pages are `index.md` and `de/index.md`
