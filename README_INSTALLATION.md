# INEOS Grenadier 3D Explorer V40 – GitHub Pages PWA

Diese Fassung ist für GitHub Pages vorbereitet. Alle Laufzeitpfade sind relativ zum Service-Worker-/Repository-Scope und funktionieren deshalb auch unter `https://BENUTZERNAME.github.io/REPOSITORY/`.

## Schnellstart

Siehe `GITHUB_PAGES_ANLEITUNG.md`.

## Enthaltene GitHub-Pages-Anpassungen

- `.github/workflows/pages.yml`: automatisches Deployment bei jedem Push auf `main`
- `.nojekyll`: verhindert unnötige Jekyll-Verarbeitung
- `404.html`: führt fehlgeleitete Aufrufe zurück zur App
- `build-info.json`: lokale Build-Info; beim Deployment automatisch ersetzt
- `sw.js`: atomare App-Shell, Offline-Video-Cache und automatisch gestempelte Build-ID
- `manifest.webmanifest`: relative Start-/Scope-URLs für Projektpfade und Custom Domains

## Installation der PWA

- Android: Seite in Chrome öffnen → „App installieren“ bzw. Browsermenü.
- Windows: Seite in Edge/Chrome öffnen → „App installieren“.
- iPhone/iPad: Safari → Teilen → „Zum Home-Bildschirm“.

Nach der Installation bleiben spätere Website-Updates installierbar, ohne dass die App gelöscht werden muss.
