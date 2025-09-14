# Minimal WebServer

En enkel Node.js-baserad webbserver med stöd för:

- Routing (home, about, contact, 404)
- Live reload via WebSockets när filer (`.html`, `.css`, `.js`) sparas
- SCSS → CSS kompilering med Sass (via npm scripts)

---

## 🚀 Kom igång

### 1. Klona projektet

```bash
git clone https://github.com/HanninenF/minimal-webServer.git
cd minimal-webServer
```

### 2. Installera beroenden

Se till att du har **Node.js (v18 eller senare)** installerat.
Kör sedan:

```bash
npm install
```

Detta installerar alla paket från `package.json`, inklusive **Sass** i `devDependencies`.

### 3. Starta servern

```bash
node test.js
```

Servern körs nu på:

```
http://127.0.0.1:3000
```

---

## 📦 Använda paket

- [`ws`](https://www.npmjs.com/package/ws) → WebSocket-server för live reload
- [`sass`](https://www.npmjs.com/package/sass) → kompilera SCSS till CSS (körs via npm script)
- [`cheerio`](https://www.npmjs.com/package/cheerio) → manipulera HTML (används i `renderAndSend.js`)

---

## 🔄 SCSS → CSS

I `package.json` finns redan ett script för Sass:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "sass": "sass index.scss index.css --watch"
}
```

Kör igång SCSS-kompileringen i watch-läge:

```bash
npm run sass
```

---

## 📂 Struktur

```
minimal-webServer/
├── 404.html
├── about.html
├── contact.html
├── home.html
├── index.html
├── index.scss
├── index.css
├── renderAndSend.js
├── normalize.js
├── routes.js
├── test.js
└── package.json
```

---

## ⚡ Funktioner

- Automatisk reload i browsern när du sparar `.html`, `.css` eller `.js`
- Minimal setup utan tunga ramverk
- Enkel routing för statiska sidor

---

## 🛠️ Utveckling

Om du vill pusha ändringar:

```bash
git add .
git commit -m "beskriv vad du ändrat"
git push
```
