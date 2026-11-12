# Grenadier 3D Explorer · V10

## Was geändert wurde
- Explosionsansicht: echte 3D-Kamera lässt sich mit Maus/Finger um 360° horizontal drehen und vertikal kippen; Reset-Knopf und Pfeiltastensteuerung hinzugefügt
- V9-Unterbauteile (z. B. „AdBlue-Einfüllstutzen“) aus der Teileliste entfernt; die eigentlichen Baugruppen bleiben bestehen
- Die bisherige „App installieren“-Schaltfläche öffnet jetzt eine direkte Geräte-Anleitung **ohne Reload** und ohne Intro-Neustart
- Automatische Erkennung von iPhone, iPad (auch Desktop-User-Agent), Android und Windows; Geräteauswahl immer möglich
- Separates `install.html` neu gestaltet und auf den richtigen App-Start verlinkt
- Intro: zusätzliche auf 1440p hochskalierte MP4-Ausgaben für größere leistungsfähige Displays; Original-1080p für Smartphones oder schwächere Geräte bleibt erhalten
- Intro-Stillbilder vorsichtig hochskaliert, damit sie auf Retina-Geräten weniger grob wirken
- HQ-Videos können mit „Offline speichern“ zusätzlich lokal gespeichert werden; regulärer Hintergrundcache bleibt schlank
- Der Service Worker kennt die neuen HQ-Dateien, auch für Range-Abfragen

## Grenzen
- Ursprüngliches Intro-Videomaterial wurde mit 1080p geliefert. 1440p ist hochwertig interpoliert, aber **kein neues 1440p-Originalmaterial**.
- Der 360°-Orbit funktioniert in der echten WebGL-Explosionsansicht. Falls WebGL ausfällt und nur das vorgerenderte Bild erscheint, ist eine freie Drehung nicht möglich.
- Änderungen an Live-HTML/JS/Service Worker wurden technisch geprüft, benötigen aber noch einen echten Test auf iPad/iPhone sowie Android/Windows.

## GitHub-Update
Den entpackten Inhalt dieser ZIP in den lokalen Ordner `Grenadier_3D_DHBW` kopieren, die alten Projektdateien überschreiben (nicht den `.git`-Ordner löschen); GitHub Desktop → Commit to main → Push origin → GitHub Actions grün. Danach in bereits installierter App **Offline & Updates → Updates prüfen**.
