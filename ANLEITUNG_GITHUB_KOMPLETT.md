# Grenadier PWA V40 – GitHub Pages komplett

## 1. Was du brauchst

- kostenloses GitHub-Konto
- empfohlen: GitHub Desktop auf deinem Windows-PC
- die ZIP `Grenadier_PWA_V40_GitHub_Pages_V6.zip`

Für GitHub Free muss das Pages-Repository öffentlich sein. Die Website-Dateien sind dann grundsätzlich öffentlich einsehbar.

---

## 2. Einmalige Ersteinrichtung

### Variante A – empfohlen: GitHub Desktop

1. Auf `github.com` anmelden.
2. Oben rechts `+` → `New repository`.
3. Name z. B. `grenadier-3d-pwa`.
4. `Public` wählen.
5. `Create repository`.
6. GitHub Desktop installieren und anmelden.
7. Das neue Repository in GitHub Desktop klonen.
8. Die Grenadier-ZIP auf dem PC entpacken.
9. Den **Inhalt** des entpackten Ordners in den lokalen Repository-Ordner kopieren.
10. Prüfen, dass auch `.github/workflows/pages.yml` und `.nojekyll` vorhanden sind.
11. In GitHub Desktop als Commit-Text z. B. `Grenadier PWA V40 initial` eintragen.
12. `Commit to main`.
13. `Push origin`.
14. Im Browser dein Repository auf GitHub öffnen.
15. `Settings` → `Pages`.
16. Unter `Build and deployment` bei `Source` → `GitHub Actions` wählen.
17. Reiter `Actions` öffnen.
18. Workflow `Grenadier PWA auf GitHub Pages veröffentlichen` abwarten.
19. Nach erfolgreichem Lauf steht die Adresse unter `Settings` → `Pages`.

Typischer Link:

`https://DEIN-GITHUB-NAME.github.io/grenadier-3d-pwa/`

### Variante B – nur Browser

Aktuell sind alle Einzeldateien der App klein genug für den normalen GitHub-Webupload. Über `Add file` → `Upload files` können die Dateien hochgeladen werden. Achte besonders darauf, dass der Ordner `.github/workflows` und die Datei `.nojekyll` wirklich im Repository landen. Falls versteckte Dateien oder Ordner fehlen, nutze GitHub Desktop.

---

## 3. Installation bei dir und Kollegen

### Wichtig

Nutzer laden **nicht die Entwickler-ZIP** herunter. Sie brauchen nur den veröffentlichten GitHub-Pages-Link.

Zusätzlich gibt es unter

`https://DEIN-GITHUB-NAME.github.io/grenadier-3d-pwa/install.html`

eine eigene Installationsseite.

### iPhone / iPad

1. GitHub-Pages-Link in Safari öffnen.
2. `Teilen`.
3. `Zum Home-Bildschirm`.
4. `Hinzufügen`.
5. App öffnen.
6. `App-Status` → `Offline vollständig speichern`.
7. Warten, bis `Offline vollständig verfügbar` angezeigt wird.

### Android

1. GitHub-Pages-Link in Chrome öffnen.
2. Browser-Menü.
3. `App installieren` bzw. `Zum Startbildschirm hinzufügen`.
4. App öffnen.
5. `App-Status` → `Offline vollständig speichern`.
6. Warten, bis `Offline vollständig verfügbar` angezeigt wird.

### Windows

1. Link in Edge oder Chrome öffnen.
2. Installationssymbol in der Adressleiste oder Browser-Menü öffnen.
3. `App installieren`.
4. App starten.
5. `App-Status` → `Offline vollständig speichern`.

---

## 4. Offline prüfen

Nach dem vollständigen Offline-Download:

1. App schließen.
2. Flugmodus aktivieren bzw. WLAN/LAN deaktivieren.
3. App erneut starten.
4. 3D-Modell, Prüfstand und gespeichertes Intro testen.

Der Browser wird zusätzlich um beständige Speicherung gebeten. Trotzdem kann ein Betriebssystem bei starkem Speichermangel Browserdaten entfernen; das lässt sich bei PWAs technisch nicht absolut verhindern.

---

## 5. So machst du später Updates

### Empfohlen mit GitHub Desktop

1. Neue Website-Version bzw. geänderte Dateien vorbereiten.
2. Deinen lokalen Repository-Ordner öffnen.
3. Die geänderten Dateien ersetzen.
4. GitHub Desktop öffnen.
5. Prüfen, welche Dateien geändert wurden.
6. Commit-Nachricht, z. B. `V41 – neue Prüfstandsfunktionen`.
7. `Commit to main`.
8. `Push origin`.
9. GitHub startet automatisch den Pages-Workflow.
10. Unter `Actions` prüfen, dass der Lauf grün abgeschlossen wurde.

Danach ist die neue Version online.

### Was müssen Nutzer tun?

Nichts neu installieren.

- Die installierte PWA bleibt auf dem Gerät.
- Bei Internetverbindung prüft sie automatisch auf Updates.
- Bei einer neuen Version erscheint `Eine neue App-Version ist verfügbar`.
- Nutzer wählen `Aktualisieren`.
- Alternativ: `App-Status` → `Update prüfen`.

Die vorherige App-Shell bleibt als Rückfall erhalten, falls die neue App-Shell nicht korrekt installiert werden kann.

---

## 6. Neue Dateien und Medien

Wenn du später neue zwingend offline benötigte Dateien hinzufügst:

- kleine Kern-Dateien in `CORE` in `sw.js` ergänzen
- größere Medien in `MEDIA` in `sw.js` ergänzen

Die beiden Intro-Videos sind bereits entsprechend eingebunden.

Bei normalen Änderungen an `index.html`, Icons oder bestehenden Dateien musst du die Build-ID nicht manuell erhöhen. GitHub Actions erzeugt bei jedem Push automatisch eine neue Build-ID aus dem Commit.

---

## 7. Wenn ein Update schlecht ist

1. Problematische Version nicht weiterbearbeiten.
2. In GitHub Desktop die vorherigen funktionierenden Dateien wiederherstellen oder den fehlerhaften Commit zurücknehmen.
3. Diesen Zustand erneut committen und pushen.
4. GitHub Pages veröffentlicht wieder eine neue Build-ID.
5. Nutzer erhalten dieses korrigierende Update wie jedes andere Update.

---

## 8. Wichtige GitHub-Grenzen für zukünftige Erweiterungen

- Browser-Upload auf GitHub: maximal 25 MiB pro Datei.
- Git-Push/GitHub Desktop: Dateien bis 100 MiB; über 100 MiB blockiert GitHub normale Git-Dateien.
- Für die Grenadier-PWA sind die aktuellen Dateien darunter.
- Der enthaltene Pages-Workflow blockiert vorsorglich Dateien über ca. 95 MiB.

Wenn später sehr große Videos oder 3D-Dateien dazukommen, sollten sie vor dem Einbau optimiert oder eine andere Verteilstrategie gewählt werden.
