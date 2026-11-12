# INEOS Grenadier V10 – Performance- und Sicherheitsverbesserungen

**Ausgangsbasis:** V10 mit der zuvor korrigierten Tank- und Tankdeckelposition. Die vorhandenen 3D-Funktionen, Videos und Installationshilfe bleiben enthalten.

## Umgesetzte Maßnahmen

| Bereich | Änderung | Nutzen |
|---|---|---|
| Performance | Online-Video-Range-Anfragen werden direkt zum Server weitergeleitet, statt die komplette gecachte MP4 als Blob zu laden. | Weniger Speicherlast bei Online-Videowiedergabe; Offline-Fallback bleibt erhalten. |
| Cache | Video-Cache auf `grenadier-media-v10-audit2` aktualisiert, alte `grenadier-media-v40`-Caches werden entfernt. | Veraltete Intro-Videos werden nicht unbegrenzt weiterverwendet. Offline-Medien müssen ggf. neu geladen werden. |
| Offline | Die gecachte `install.html` wird bei Navigation korrekt angezeigt. | Installationsanleitung ist auch offline erreichbar. |
| Sicherheit | Service-Worker-Steuerbefehle akzeptieren nur Clients derselben Origin innerhalb des registrierten Scopes. | Weniger Angriffsfläche für unberechtigte Worker-Nachrichten. |
| Sicherheit | Externe Links mit neuem Tab erhalten `noopener noreferrer`. | Kein Zugriff auf `window.opener`, geringere Referrer-Weitergabe. |
| Robustheit | Byte-Range-Grenzen werden als sichere Integer validiert. | Fehlertolerantere Offline-Videoauslieferung. |
| Deployment | GitHub Actions prüft alle Inline-JavaScript-Blöcke auf Syntaxfehler. | Verhindert Deployments mit einfachen JavaScript-Syntaxfehlern. |

## Verbleibende Schwachstellen

- **Mittel:** Große Startdatei (rund 14,6 MB) und vier MP4-Videos (zusammen rund 34,4 MB). Keine verlustbehaftete Reduktion der HQ-Qualität vorgenommen.
- **Mittel:** CSP enthält weiterhin `unsafe-inline`; eine Härtung erfordert die vorsichtige Auslagerung der eingebetteten 3D-Engine und Styles.
- **Mittel:** GitHub Pages ermöglicht keine frei konfigurierbaren HTTP-Sicherheitsheader wie `frame-ancestors`.
- **Mittel:** Bereits offline gecachte Videos verwenden für Range-Anfragen weiterhin einen vollständigen Blob. Speicherbedarf auf echten iOS-Geräten prüfen.
- **Niedrig:** GitHub Actions nicht auf feste Commit-SHAs gepinnt.

## Prüfstatus

`node --check` für Service Worker und alle nichtleeren Inline-JavaScript-Blöcke erfolgreich. ZIP-Integrität geprüft. Keine WebGL-, FPS-, RAM-, iOS-/Android- oder Live-Deployment-Tests durchgeführt. Die Änderungen sind deshalb eine gezielte, statisch geprüfte Optimierung und keine Garantie für höhere FPS oder vollständige Sicherheit.

**Hinweis:** Bei einem Update kann es nötig sein, Offline-Intro-Videos erneut zu speichern.
