# Zukünftige Updates – Schritt für Schritt

## Einfachster Ablauf mit GitHub Desktop

1. Vor Änderungen eine Kopie der zuletzt funktionierenden Projektversion behalten.
2. Neue/angepasste Dateien in deinen lokalen Repository-Ordner kopieren und vorhandene Dateien ersetzen.
3. GitHub Desktop öffnen und die Änderungsliste prüfen.
4. Commit-Nachricht vergeben, z. B. `V41 – Prüfstand und Innenraum verbessert`.
5. **Commit to main** und danach **Push origin**.
6. GitHub startet automatisch den Pages-Workflow.
7. Unter **Actions** warten, bis der Lauf grün ist.
8. Danach ist die neue Version veröffentlicht.

## Was passiert bei den Nutzern?

- Die installierte App bleibt installiert.
- Bei Internetverbindung prüft sie automatisch auf eine neue Service-Worker-Version.
- Wenn ein Update bereitsteht, erscheint `Eine neue App-Version ist verfügbar`.
- Nutzer drücken **Aktualisieren**; die App lädt neu.
- Alternativ: **App-Status → Update prüfen**.
- Eine Deinstallation ist nicht erforderlich.

## Wenn ein Update fehlschlägt

Der neue Service Worker wird erst installiert, wenn die Kern-Dateien erfolgreich geladen wurden. Die vorherige App-Shell bleibt als Rückfall erhalten. Ein fehlgeschlagenes GitHub-Actions-Deployment ersetzt die veröffentlichte Seite nicht durch eine halbfertige Version.

## Neue Dateien offline verfügbar machen

- Kleine, zwingend benötigte Dateien: in `CORE` in `sw.js` ergänzen.
- Große Medien (z. B. Videos): in `MEDIA` ergänzen.
- Danach normal committen/pushen.
- Bestehende Nutzer erhalten die neue App-Version ohne Neuinstallation.

## Intro-Video ersetzen

Du kannst `media/intro-wide.mp4` und `media/intro-portrait.mp4` ersetzen. Durch die neue Build-ID wird der Mediencache nach einem Update erneut aktualisiert.

## Sehr wichtig

Nicht einfach nur eine neue ZIP-Datei ins Repository legen. GitHub Pages benötigt die entpackten Website-Dateien im Repository.
