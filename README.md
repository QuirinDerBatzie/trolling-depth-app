# Trolling Depth (metrisch) – PWA

Berechnet Ködertiefe beim Schleppangeln. Offlinefähig, installierbar, GPS-Speed, Rig-Library, Kalibrierung, Dive Curve.

## Schnellstart
1. Repo pushen.
2. **GitHub Pages** aktivieren: Settings → Pages → Deploy from branch → `main`/`/root` → Save.
3. Seite aufrufen → Menü „Zum Startbildschirm hinzufügen“ (Android/Chrome).

## Struktur
- `index.html` – App UI & Logik (pure HTML/CSS/JS)
- `sw.js` – Service Worker (Offline Cache)
- `manifest.webmanifest` – PWA Manifest
- `icons/` – PNG Icons (192/512)

## Hinweise
- HTTPS ist durch GitHub Pages gegeben.
- Daten werden lokal in `localStorage` gespeichert (rigs & Kalibrierung).
- GPS: Browser fragt nach Berechtigung. In Innenräumen liefert `speed` ggf. `null`.

## Als Android-App (Bubblewrap / TWA)
Voraussetzung: Node, JDK, Android SDK.

```bash
npm i -g @bubblewrap/cli
bubblewrap init --manifest=https://DEINNAME.github.io/REPO/manifest.webmanifest
bubblewrap build
