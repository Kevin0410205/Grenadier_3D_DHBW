# Grenadier PWA V40 – Stabil V4

Ausgangsbasis: Grenadier_PWA_V40_Offline_V3.zip (alle V40-Funktionen erhalten).

## Änderungen
- Sofort sichtbares, schlankes Start-Overlay. Wird beim DOM-Start ausgeblendet; Video-Intro-Logik bleibt unverändert. Keine geräteübergreifende 2-Sekunden-Garantie.
- Service Worker: vollständige App-Shell wird vor Aktivierung gecacht; fehlgeschlagene Installation entfernt ihren unvollständigen Cache. Die vorherige Shell-Version bleibt als Rückfall-Cache erhalten. Achtung: Ein automatisches Zurückrollen nach einem späteren Laufzeitfehler ist damit noch nicht implementiert.
- Offline-Statusfenster: App-Shell, Anzahl offline gespeicherter Videos, Browser-Speicherverbrauch und erneuter Mediendownload. Browser-Cache ist nicht dauerhaft garantiert.
- Installationshilfe für iOS, Android und Windows, soweit Browser und HTTPS dies unterstützen.
- Optionale Browser-RAF-Diagnose im Statusfenster (keine echten GPU-/Render-FPS).
- Vorhandene 3D-Engine und Szenenwechsel nicht umgebaut, um keine Wartezeiten oder Regressionen zu erzeugen. Eine beschleunigte Szene kann ohne Laufzeittest nicht belegt werden.
- Bereits vorhandene Update-Benachrichtigung und Offline-Mediencache beibehalten.

## Grenzen
- Keine echten Smartphone- oder GPU-Tests. Kein zuverlässiger Nachweis von FPS, Offline-Verfügbarkeit nach Betriebssystem-Speicherbereinigung oder vollständiger Szenenkonsistenz.
- Crash-Recovery auf WebGL-Ebene ist nicht implementiert, da ein Eingriff in die große minifizierte 3D-Engine ohne Browser-Regressionstest riskant wäre.
- Browser können die Cache-Daten löschen; persist() ist nur eine Anfrage.
- Vor einer öffentlichen Bereitstellung Installation, Updates, Intro und Offline-Funktion auf den Zielgeräten testen.
