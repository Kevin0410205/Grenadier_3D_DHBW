# Änderungen V40 PWA

- Quellbasis: `Grenadier_3D_Explorer_V40.html`, SHA-256 `93d95bf66302567b079417973833a8d06062c0fb1c3599588964283e90f9c9c2`.
- Vollständige V40-HTML-Quelle in `index.html` übernommen; 3D-Skripte nicht geändert.
- PWA-Manifest, Icons, Service Worker und Vercel-Konfiguration aus der vorigen V24-PWA als Ausgangspunkt übernommen und für V40 angepasst.
- Service-Worker-Cache auf V40 aktualisiert; begrenzter Scope, Netzwerk zuerst bei Navigation, Offline-Fallback, versionsbasierte Cache-Bereinigung.
- Apple-Metadaten, Touch-/Safe-Area- und Fokus-Stile ergänzt.
- Kein behaupteter Geräte- oder 3D-Szenentest; vor Veröffentlichung manuell testen.
