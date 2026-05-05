# PlatinumEye

PlatinumEye is a browser multiplayer arena shooter inspired by the tempo and split-screen tension of late-90s console shooters. It uses original names, map geometry, visuals, and sounds.

The arena materials use a generated Imagegen 2 texture atlas at `public/assets/textures/platinumeye-material-atlas.png`, with procedural canvas fallbacks kept in code so the game remains resilient while assets load.

## Run

```bash
npm install
npm run dev
```

Open the printed local URL in multiple tabs or share it on the same network. Players who enter the same room code join the same match.

Solo rooms are playable too: the server fills the match with a few simulation agents until more human players join.

## Build

```bash
npm run build
```
