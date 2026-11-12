# V10 Intro-Reparatur

- Problematische Online-Range-Umleitung im Service Worker zurückgenommen.
- Startzeit für Video-Initialisierung auf 5,5/6,5 Sekunden verlängert, HQ-Fallback auf 4,5 Sekunden.
- Bei Offline-Modus wird das Intro nicht mehr sofort übersprungen, sondern ein zwischengespeichertes Video versucht.
- Service-Worker-Version geändert, damit Browser den korrigierten Worker installieren.
- Bestehende 3D-Funktionen und Tankkorrektur bleiben unverändert.

Hinweis: Syntax und ZIP-Integrität geprüft, aber reale Wiedergabe auf iOS/Android nicht getestet. Nach GitHub-Upload die Seite vollständig schließen und neu öffnen; bei weiterhin altem Verhalten Website-Daten/Service-Worker-Cache löschen.
