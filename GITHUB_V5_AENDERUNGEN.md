# GitHub Pages V5 – Änderungen

- GitHub-Actions-Deployment für `main` ergänzt.
- Jeder Deployment-Commit erhält automatisch eine eigene Service-Worker-Build-ID.
- Dadurch werden installierte PWAs auch dann aktualisiert, wenn nur HTML/Medien geändert wurden.
- Service Worker wird mit `updateViaCache: none` registriert und nach App-Start aktiv auf Updates geprüft.
- Relative URLs bleiben erhalten; dadurch kein harter Repositoryname im Quellcode.
- `.nojekyll` und GitHub-Pages-taugliche `404.html` ergänzt.
- App-Shell bleibt atomar: unvollständige neue Builds ersetzen keinen funktionierenden Build.
- Eine vorherige Shell bleibt als Rückfall-Cache erhalten.
- Intro-Medien werden versionsbewusst im Hintergrund erneuert und bleiben offline nutzbar.
- Statusanzeige zeigt zusätzlich, ob persistenter Browserspeicher bestätigt wurde.
- Start-Splash bleibt bis zum ersten Intro-Frame sichtbar. Falls das Intro nach ca. 1,85 s noch nicht gestartet ist, wird es zugunsten eines schnellen App-Starts beendet; dadurch entsteht kein langes schwarzes Zwischenfenster.
- Vercel-Konfiguration aus dieser GitHub-Ausgabe entfernt, um zwei Deployment-Wege nicht zu vermischen.
