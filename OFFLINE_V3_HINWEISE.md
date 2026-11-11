# Grenadier V40 – Offline V3

- Startseite, Manifest und Icons werden beim Service-Worker-Installieren vollständig zwischengespeichert.
- Beide Intro-Videos werden **nach** dem ersten Seitenladen im Hintergrund heruntergeladen und im separaten Mediencache gespeichert. Das blockiert weder Intro noch 3D-Start.
- Bereits gespeicherte Videos werden bei erneuten Besuchen nicht neu geladen. Der Service Worker unterstützt HTTP-Range-Anfragen für gespeicherte MP4-Dateien, damit die Wiedergabe auch offline funktioniert.
- Bei unterbrochenem Download wird beim nächsten Online-Besuch erneut versucht, fehlende Videos zu speichern.
- Neue App-Versionen können installiert werden, ohne die App neu zu installieren. Der Mediencache bleibt bei Updates erhalten.
- Browser/OS können Speicher auch später löschen; dauerhaftes Offline-Speichern ist technisch nicht garantiert. Die Berechtigung für beständigen Speicher wird, soweit verfügbar, angefragt.
- Das Intro wird durch die bestehende V40-Logik bei Offline-Start übersprungen. Die Video-Dateien sind trotzdem für spätere Wiedergabe offline verfügbar.
- Achtung: Die automatische Hintergrundspeicherung benötigt zusätzlich ungefähr 12,3 MiB Download. Mobilfunkdaten können belastet werden.
- Neue Videos mit gleichem Dateinamen werden derzeit nicht automatisch ersetzt. Bei Videoänderungen Dateinamen versionieren und die MEDIA-Liste in sw.js aktualisieren.
- Test: online installieren, warten bis Videos geladen sind, Flugmodus aktivieren, App schließen und neu öffnen; Intro-Replay separat prüfen.
- Keine Garantie für tatsächliche Gerätetests; JavaScript-Syntax und ZIP-Integrität wurden statisch geprüft.
