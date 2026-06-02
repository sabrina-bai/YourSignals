# YourSignals2.0

Snapshot date: 2026-05-31

This folder preserves the YourSignals2.0 retro deep-space UI version before adding detail pages or making further product changes.

## Included files

- `src/pages/Home.tsx`
- `src/index.css`
- `src/assets/red-icon.png`

## What this version contains

- Retro deep-space / copper-line interface style.
- Hero banner with planet, aurora, horizon, and completed scan-console base.
- Interactive `信号扫描` button that triggers a scan animation and scrolls to the competition cards.
- Category filters, including `AI MUSIC`.
- Left-side red signal spectrum rail that moves with the active competition card.
- Custom red icon in the top-left brand area.

## Restore command

From the project root:

```bash
cp ui-snapshots/YourSignals2.0/src/pages/Home.tsx src/pages/Home.tsx
cp ui-snapshots/YourSignals2.0/src/index.css src/index.css
cp ui-snapshots/YourSignals2.0/src/assets/red-icon.png src/assets/red-icon.png
```
