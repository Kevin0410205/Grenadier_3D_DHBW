# INEOS Grenadier · 3D Explorer V40 PWA

Diese Repository-Fassung ist für **GitHub Pages** vorbereitet. Die eigentliche App steckt in `index.html`; PWA, Offline-Cache und Update-System werden über `sw.js`, `manifest.webmanifest` und GitHub Actions bereitgestellt.

## Erstveröffentlichung

Siehe **`GITHUB_ERSTEINRICHTUNG.md`**.

## Installation für Nutzer

Nach der Veröffentlichung einfach den GitHub-Pages-Link öffnen. Nutzer müssen **keine ZIP-Datei** herunterladen. Eine kurze Geräteanleitung liegt zusätzlich öffentlich unter `install.html`.

## Updates

Geänderte Dateien in dieses Repository übernehmen und nach `main` pushen. GitHub Actions veröffentlicht automatisch eine neue Build-Version. Installierte PWAs erkennen das Update ohne Deinstallation.

## Wichtig

- GitHub Free: GitHub Pages ist für öffentliche Repositorys verfügbar.
- Große neue Medien möglichst unter 95 MB pro Einzeldatei halten; der Workflow prüft das vor dem Deployment.
- Für zwingend offline benötigte neue Dateien `CORE` bzw. `MEDIA` in `sw.js` ergänzen.
