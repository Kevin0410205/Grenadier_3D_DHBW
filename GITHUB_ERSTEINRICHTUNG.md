# GitHub Pages – Ersteinrichtung Schritt für Schritt

## Empfohlener Weg: GitHub Desktop

Dieser Weg ist am sichersten, weil auch `.github/workflows/pages.yml` und `.nojekyll` zuverlässig hochgeladen werden.

1. Auf **github.com** anmelden oder kostenlos ein Konto erstellen.
2. Oben rechts **+ → New repository**.
3. Repository-Name z. B. `grenadier-3d-pwa`.
4. Für GitHub Free **Public** wählen.
5. **Create repository**.
6. **GitHub Desktop** installieren und das neue Repository klonen.
7. Diese ZIP-Datei auf dem PC entpacken.
8. **Den Inhalt** des entpackten Ordners in den lokalen Repository-Ordner kopieren. Nicht die ZIP-Datei selbst hochladen.
9. In GitHub Desktop kontrollieren, dass auch `.github/workflows/pages.yml` vorhanden ist.
10. Commit-Nachricht z. B. `Grenadier PWA V40 initial` → **Commit to main** → **Push origin**.
11. Auf GitHub im Repository: **Settings → Pages**.
12. Unter **Build and deployment → Source**: **GitHub Actions** wählen.
13. Oben im Repository **Actions** öffnen und den Workflow `Grenadier PWA auf GitHub Pages veröffentlichen` abwarten.
14. Unter **Settings → Pages** steht danach die veröffentlichte Adresse, typischerweise `https://DEINNAME.github.io/grenadier-3d-pwa/`.

## Browser-only Alternative

Du kannst Dateien auch über **Add file → Upload files** hochladen. Achte besonders darauf, dass `.github/workflows/pages.yml` und `.nojekyll` mit im Repository landen. Falls dein Browser/Dateimanager versteckte Dateien überspringt, nutze GitHub Desktop.

## Nach der Veröffentlichung prüfen

1. GitHub-Pages-Link öffnen.
2. 3D-Modell und Intro testen.
3. **App-Status → Offline vollständig speichern**.
4. Warten bis `Offline vollständig verfügbar` erscheint.
5. App installieren.
6. Flugmodus aktivieren und App erneut öffnen.

## Link an Kollegen

Schicke ausschließlich die GitHub-Pages-Adresse. Sie brauchen kein GitHub-Konto und keine ZIP-Datei.
