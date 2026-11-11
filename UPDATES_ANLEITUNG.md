# Zukünftige Updates – Schritt für Schritt

## 1. Dateien lokal ändern
Öffne deinen lokalen Repository-Ordner **Grenadier_3D_DHBW**. Dort liegen die veröffentlichten Website-Dateien.

Typische Änderungen sind zum Beispiel:
- `index.html` für Oberfläche und Funktionen
- `sw.js` für Offline-Verhalten
- `manifest.webmanifest` für PWA-Einstellungen
- `media/` für Intro-Videos
- `icons/` für App-Symbole

## 2. Änderungen in GitHub Desktop prüfen
Nach dem Speichern öffnest du **GitHub Desktop**. Dort siehst du alle geänderten Dateien.

Prüfe kurz:
- sind nur die gewünschten Dateien geändert?
- wurde nicht versehentlich eine ZIP-Datei mit hineinkopiert?
- sind neue Medien oder Bilder wirklich im richtigen Ordner?

## 3. Commit erstellen
Unten links eine kurze Commit-Nachricht eintragen, zum Beispiel:

`V41 – Statusfenster und Intro verbessert`

Dann auf **Commit to main** klicken.

## 4. Online veröffentlichen
Danach oben auf **Push origin** klicken.

Damit wird die neue Version zu GitHub hochgeladen. GitHub Actions startet anschließend automatisch das Deployment für GitHub Pages.

## 5. Deployment prüfen
Öffne dein Repository auf GitHub und gehe auf **Actions**.

Wenn der Lauf grün ist, wurde die neue Version erfolgreich veröffentlicht.
Wenn der Lauf rot ist, war das Update **nicht** erfolgreich online. Dann bleibt die bisherige funktionierende Version aktiv.

## 6. Was Nutzer tun müssen
Nutzer müssen die App **nicht neu installieren**.

Normalerweise reicht:
1. App öffnen
2. bei Bedarf **App-Status → Update prüfen**
3. den Hinweis **Aktualisieren** bestätigen

Danach lädt die App neu und verwendet die neue Version.

## 7. Was bei mehreren Nutzern passiert
Mehrere Nutzer gleichzeitig sind kein Problem. Die App läuft als **statische Website/PWA** auf GitHub Pages.
Es gibt keinen gemeinsamen bearbeitbaren Serverzustand und keine Sitzung, die andere Nutzer blockiert.
Jeder Nutzer lädt nur seine eigene Kopie der Dateien im Browser.

## 8. Wenn etwas schiefgeht
- Ein fehlgeschlagenes GitHub-Actions-Deployment ersetzt die veröffentlichte Seite nicht durch eine halbfertige Version.
- Der Service Worker installiert neue Versionen erst, wenn die Kern-Dateien korrekt vorhanden sind.
- Eine vorherige App-Shell bleibt als Rückfall verfügbar.

## 9. Sehr wichtig
Nicht einfach eine neue ZIP-Datei in das Repository legen. GitHub Pages benötigt die **entpackten Website-Dateien** direkt im Repository.
