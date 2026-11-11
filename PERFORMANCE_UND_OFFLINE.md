# INEOS Grenadier 3D Explorer V40 – Performance und Offline

## Umgesetzt

- Zwei Intro-Videos aus dem HTML ausgelagert: `media/intro-wide.mp4` (6,21 MiB) und `media/intro-portrait.mp4` (6,09 MiB). Die HTML-Datei sinkt von 28,95 auf 12,55 MiB (ca. 57 % weniger HTML-Daten). Die Videos werden nur bei tatsächlichem Intro-Start als separate Ressourcen angefordert; `preload=none` verhindert das automatische Vorladen.
- Der vorhandene Intro-Ablauf bleibt bestehen. Beim erneuten Laden oder bei Zurück-Navigation wird das Intro bereits durch den V40-Code übersprungen. Ohne Netzwerk wird das Video-Intro nun ebenfalls übersprungen, damit die 3D-Oberfläche schneller erscheint.
- Service Worker `grenadier-v40-perf-2`: Die Installation gilt nur als erfolgreich, wenn die Start-HTML vollständig im Cache liegt. App-Shell, Manifest und Icons werden lokal zwischengespeichert. Bei fehlendem Netzwerk greift die Navigation auf die gespeicherte HTML-Datei zurück. Für die Navigation gilt ein Netzwerk-Timeout von 3,5 Sekunden.
- Videos werden absichtlich NICHT vorab offline gespeichert: Das vermeidet zusätzliche 12,3 MiB Cache-Daten und den Verzögerungseffekt beim ersten Besuch. Offline kann das Intro ausfallen, die 3D-Anwendung soll aber weiterhin starten.
- Video-Dateien werden über Vercel mit Byte-Range-Unterstützung und einem 24-Stunden-Cache-Header ausgeliefert.

## Test nach Veröffentlichung (HTTPS)

1. ZIP entpacken, die enthaltenen Dateien im Stammverzeichnis eines Vercel-Projekts bereitstellen (nicht die ZIP selbst als Website verwenden).
2. App online öffnen und vollständig laden lassen; einmal neu laden, damit der Service Worker die Kontrolle übernehmen kann.
3. Browser-Entwicklertools → Application → Service Workers: registrierten Worker und Cache `grenadier-v40-perf-2` prüfen.
4. Netzwerk offline schalten und Startseite erneut laden. Die 3D-Oberfläche sollte erscheinen; das Video-Intro wird übersprungen.
5. Auf iPhone Safari → Teilen → Zum Home-Bildschirm; Android Chrome → App installieren; Windows Chrome/Edge → Installieren.
6. Das Intro auf Mobilfunk sowie im WLAN testen und die Zeit bis zum ersten sichtbaren Bild vergleichen.

## Grenzen

- Die HTML-Datei ist weiterhin 12,55 MiB groß, vor allem wegen eingebetteter weiterer Medien und der 3D-Engine. Eine weitere Aufteilung in externe Dateien ist möglich, benötigt aber gezielte Laufzeittests.
- Keine realen FPS-/Speicher- oder Geräte-Benchmarks durchgeführt. Kein vollständiger visueller Test der 3D-Geometrie.
- Browser können den Offline-Cache bei Speicherknappheit entfernen. Die erste vollständige Online-Nutzung ist Voraussetzung für Offline-Betrieb.
- Externe Netzwerkanfragen innerhalb der 3D-Engine (falls vorhanden) sind nicht automatisch offline verfügbar.
