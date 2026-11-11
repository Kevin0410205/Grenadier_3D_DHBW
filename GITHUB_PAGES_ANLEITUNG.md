# Grenadier PWA V40 – GitHub Pages

## Empfohlene Veröffentlichung

1. Auf GitHub ein **öffentliches** Repository anlegen, z. B. `grenadier-3d-pwa`.
2. Den **Inhalt** dieses ZIP-Archivs in das Repository laden (nicht nur die ZIP-Datei).
3. Die Dateien auf den Branch `main` committen/pushen.
4. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. Unter **Actions** den Workflow `Grenadier PWA auf GitHub Pages veröffentlichen` abwarten.
6. Danach erscheint die Seite unter `https://BENUTZERNAME.github.io/REPOSITORY/`.

Die PWA verwendet relative Pfade. Daher funktioniert sie sowohl unter dem GitHub-Projektpfad `/REPOSITORY/` als auch später mit einer eigenen Domain, ohne dass der Repositoryname im Quellcode eingetragen werden muss.

## Updates ohne Neuinstallation

Bei jedem Push auf `main` erzeugt der Workflow eine neue Build-ID aus dem Git-Commit. Diese Build-ID wird nur in der bereitgestellten Kopie von `sw.js` eingetragen. Dadurch ändert sich der Service Worker bei **jedem Deployment**, selbst wenn du nur `index.html` bearbeitet hast.

Bereits installierte Benutzer bekommen dadurch bei bestehender Internetverbindung den Hinweis **„Eine neue App-Version ist verfügbar.“**. Nach `Aktualisieren` wird die neue Version aktiviert. Eine Deinstallation oder erneute Installation ist nicht erforderlich.

Das neue App-Shell-Paket wird zuerst vollständig heruntergeladen. Erst wenn es erfolgreich vorliegt, kann der neue Service Worker aktiviert werden. Eine vorherige Shell-Version bleibt als Rückfall-Cache erhalten.

## Offline

- `index.html`, Manifest, Icons und Build-Info werden als App-Shell gespeichert.
- Beide Intro-Videos werden nach dem ersten Online-Start im Hintergrund offline gespeichert.
- Bei einer neuen Build-Version werden die Intro-Videos im Hintergrund erneut geprüft/aktualisiert.
- Die App fordert – soweit vom Browser unterstützt – dauerhafte Speicherung an.
- Browser, insbesondere iOS, dürfen Offline-Daten bei starkem Speichermangel trotzdem entfernen. Das kann eine PWA technisch nicht vollständig verhindern.

## Zukünftige Änderungen

Für normale Updates musst du nur die geänderten Dateien committen und auf `main` pushen. Der Pages-Workflow veröffentlicht automatisch die neue Fassung. **`sw.js` muss für eine reine Versionsnummer nicht manuell bearbeitet werden.**

Wenn du neue externe Dateien hinzufügst, die zwingend offline verfügbar sein sollen, ergänze sie zusätzlich in `CORE` oder `MEDIA` in `sw.js`.

## Kostenloser Betrieb

GitHub Pages ist auf GitHub Free für öffentliche Repositories verfügbar. Wenn die Projektdateien nicht öffentlich sein dürfen, ist ein kostenloses privates GitHub-Pages-Repository nicht die passende Variante.
