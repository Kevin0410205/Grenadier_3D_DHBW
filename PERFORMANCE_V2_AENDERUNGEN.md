# Grenadier PWA V40 – Performance V2

## Tatsächliche Änderungen
- V40-3D-Engine und Geometrie unverändert übernommen.
- Intro-Videos weiterhin als externe MP4-Dateien (aus vorheriger Runde).
- Auf Touchgeräten verkürzter Video-Start-Wächter: 2,8 statt 4 Sekunden. Bei Video-Ladeproblemen wechselt die App zur 3D-Ansicht.
- Wenn der Browser beim Start eindeutig offline meldet, wird das Intro übersprungen.
- Offline-App-Shell und Icons müssen beim Service-Worker-Installieren vollständig zwischengespeichert werden.
- Offline-Navigation aus dem Cache ohne 3,5-Sekunden-Netzwerk-Timeout.
- Versionswechsel erst nach Zustimmung über eine kleine Update-Leiste, kein erzwungenes Neuladen während der Simulation.
- Beim Zurückkehren in die App wird auf Service-Worker-Updates geprüft.
- Service Worker speichert keine MP4-Dateien vorab. Offline-Intro ist deshalb nicht garantiert; die 3D-Ansicht soll weiterhin starten.

## Bewusst nicht verändert
- Renderer, dynamische Pixelratio, Schatten, 3D-Szenen und vorhandene Visibility-Pausierung: Die V40 enthält bereits entsprechende Mechanismen. Ungeprüfte Änderungen wären riskant.
- Intro erscheint bei einer neuen Navigation weiterhin gemäß ursprünglicher V40-Logik; bei Reload/Back-Forward wird es übersprungen.

## Grenzen der Prüfung
- Statische Struktur, JavaScript-Syntax und Archivintegrität überprüfbar.
- Reale FPS, Temperatur, RAM-Verbrauch und Installation auf iOS/Android/Windows müssen auf Geräten geprüft werden.
- Der Service Worker ist für HTTPS (z.B. Vercel) vorgesehen, nicht für file://.
