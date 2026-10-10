switchcase.ch
=============

Website of SwitchCase KLG. A Jekyll site hosted on GitHub Pages, based on the
[Agency bootstrap theme](https://startbootstrap.com/template-overviews/agency/).

# Run locally

    bundle install
    bundle exec jekyll serve

or use `startServer.bat` / `startServer.sh`. The site is then at http://localhost:4000.

# Where things are

### Languages

German is served at `/`, English at `/en/`. All texts are in `_data/i18n/de.yml`
and `_data/i18n/en.yml`; keep the two files in sync.

### Portfolio

Projects are in `_data/projects.yml` (with a `de` and an `en` block each).

Images are in `/img/portfolio`

### Team

Team members and links are in `_config.yml`, their role texts in the i18n files
under `team.roles`.

Images are in `/img/team/`

### Clients

Logos are in `/img/logos/` and listed in `_includes/clients.html`.

### Legal pages

`impressum.html`, `datenschutz.html`, `en/imprint.html` and `en/privacy.html`.
Set `uid` in `_config.yml` to show the company identification number on the imprint.

### Styles and fonts

Colors and font families are in `_data/template.yml`, styles in
`_includes/css/agency.css`. Montserrat and Roboto Slab are self-hosted in
`/css/fonts` (SIL Open Font License).
