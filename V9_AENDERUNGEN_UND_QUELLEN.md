# Grenadier 3D Explorer – V9

## Änderungen gegenüber GitHub-Pages-V8

1. **App-Titel:** Manifest-Name und HTML-Titel heißen jetzt „INEOS Grenadier · 3D Explorer V9“. Dadurch erscheint V9 als Fenstertitel in der PWA. Der Home-Bildschirm-Kurzname bleibt „Grenadier 3D“.
2. **„Hilfe“ entfernt:** Der redundant gewordene Hilfe-Button im Menü „Offline & Updates“ ist entfernt; Installation über `install.html` bleibt weiterhin möglich.
3. **Tankklappe vorverlegt:** Das vollständige 3D-Bauteil **einschließlich Karosserieausschnitt, drehbarer Klappe, innerem Tankverschluss und AdBlue-Verschluss** wurde um 0,28 Modell-Meter in Richtung Fahrzeugfront verschoben. Rechtslenker-/rechte Karosserieseite bleibt unverändert. Grundlage: Nutzerfoto und INEOS-Handbuch.
4. **SCR/TRM/PDC geprüft:** Die Positionen wurden mit den verfügbaren Quellen verglichen. SCR links hinten und TRM rechts hinten entsprechen den verfügbaren Informationen. Die PDC-Markierung liegt im Modell rechts hinten; die exakte Montageposition am 2022er RHD-Prototyp ist nicht unabhängig nachgewiesen. Deshalb werden alle drei Einbauzonen im Text technisch korrekt als angenäherte Rekonstruktionen beschrieben. **Keine riskante unbelegte Verschiebung der Steuergeräte.**
5. **Explosionsansicht:** Mehr sichtbare Callouts der bereits vorhandenen realen Modellbaugruppen auf Desktop; 17 zusätzliche Bauteilbeschriftungen in der Teileliste, jeweils der richtigen vorhandenen Baugruppe zugeordnet. Die neuen Unterbezeichnungen sind keine frei schwebenden, separat animierten 3D-Teile; Antippen wählt die zugehörige Baugruppe.
6. **Bestehende PWA:** Offline, Service Worker, GitHub Pages Workflow, Updates und alle Intro-Mediendateien bleiben erhalten.

## Quellen und Grenzen

- **INEOS Owners Handbook:** Einfüllklappe im hinteren rechten Fahrzeugbereich; http(s)-Original: https://ineosautomotive.stylelabs.cloud/api/public/content/2f93f47a9567444eb73295aeacc02cbd?v=89a71359
- **INEOS Mandatory Work Order IAMWO003025 (Zusammenfassung):** Einbau TRM im rechten Laderaum hinter Verkleidung, https://dot.report/manufacturer-communications/11002679
- **Grenadier-Forum, SCR am linken hinteren Radhaus:** https://www.theineosforum.com/threads/ad-blue-bypass.12414288/page-3
- **PDC:** Einbaubereich in V40 anhand Teilekatalogreferenz GRA-9J11-043760 rekonstruiert, aber keine unabhängig prüfbare fahrzeugspezifische RHD-Prototyp-Abbildung verfügbar.
- Das Nutzerfoto zeigt die relative Tankklappenposition. Der 3D-Wert ist eine plausible Modellanpassung, keine millimetergenaue Vermessung des Originalfahrzeugs.

## Prüfen nach GitHub-Deployment

- GitHub Desktop: geänderte Dateien ersetzen, **Commit to main**, **Push origin**.
- Unter GitHub Actions prüfen, ob Deployment grün ist.
- Installierte PWA öffnen → „Offline & Updates“ → „Updates prüfen“ → Aktualisieren.
- App bleibt installiert; eine Neuinstallation ist nicht nötig.
- Tankklappe rechts prüfen, öffnen und schließen, Kameraansicht „Tankklappe“ prüfen.
- Explosionsansicht auf PC und Smartphone testen, insbesondere die Teileliste.
- Steuergeräte SCR/TRM/PDC anklicken und auf Überschneidungen prüfen.

Die erfolgreiche JavaScript-Syntaxprüfung ist keine Aussage über die optische Darstellung oder die exakte OEM-Hardwarelage.
