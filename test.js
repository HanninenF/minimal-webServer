import { createServer } from "node:http";
import renderAndSend from "./renderAndSend.js ";
import { readFile, watch as watchAsync } from "node:fs/promises";
import { WebSocketServer } from "ws";
import normalize from "./normalize.js";

const PORT = process.env.PORT || 3000;

const server = createServer(async (req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  const route = normalize(pathname);

  if (pathname === "/index.css") {
    res.setHeader("Content-Type", "text/css; charset=utf-8");
    res.statusCode = 200;
    return res.end(await readFile("./index.css", "utf8"));
  }

  switch (route) {
    case "/":
      res.statusCode = 200;
      return await renderAndSend(res, req, "/", true, false);

    case "/contact":
      res.statusCode = 200;
      return await renderAndSend(res, req, "/contact", false, false);

    case "/about":
      res.statusCode = 200;
      return await renderAndSend(res, req, "/about", false, false);

    default:
      res.statusCode = 404;
      return await renderAndSend(res, req, "/404", false, true);
  }
});

const wss = new WebSocketServer({ server });
(async () => {
  const exts = [".html", ".css", ".js"];

  for await (const evt of watchAsync(".", { recursive: false })) {
    if (evt.filename && exts.some((ext) => evt.filename.endsWith(ext))) {
      wss.clients.forEach((c) => c.readyState === 1 && c.send("reload"));
    }
  }
})().catch((err) => console.error("watch failed:", err));
server.listen(PORT);

/* import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
const server = createServer(async (req, res) => {
  const route = req.url;
  console.log("ROUTE:", route);

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  res.statusCode = 200;

  switch (route) {
    case "/favicon.ico":
      res.writeHead(204, { "Content-Type": "image/x-icon" });
      return res.end();

    case "/.well-known/appspecific/com.chrome.devtools.json":
      // Chrome DevTools sondering – svara tomt
      res.writeHead(204);
      return res.end();

    case "/":
    case "/home":
    case "/home/":
      console.log("HOME");
      res.statusCode = 200;
      return res.end(await readFile("home.html", "utf8"));

    case "/about":
    case "/about/":
      console.log("ABOUT");
      res.statusCode = 200;
      return res.end(await readFile("about.html", "utf8"));

    case "/contact":
    case "/contact/":
      console.log("CONTACT");
      res.statusCode = 200;
      return res.end(await readFile("contact.html", "utf8"));

    default:
      console.log("404");
      return res.end(await readFile("404.html", "utf8"));
  }
});

server.listen(3001); */

/* import { createServer } from "http";

const server = createServer((req, res) => {
  const title = "hello";
  const header = "Hello world!";
  const content = "lorem ipsum ...";
  const route = req.url;

  if (req.url === "/favicon.ico") {
    res.writeHead(204, { "Content-Type": "image/x-icon" });
    return res.end();
  }
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.statusCode = 200;
  if (route === "/") {
    console.log("HOME");
    res.statusCode = 200;
  } else if (route === "/contact") {
    console.log("CONTACT");
    res.statusCode = 200;
  } else if (route === "/about") {
    console.log("ABOUT");
    res.statusCode = 200;
  } else {
    console.log("404");
  }
  res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
            <h1>${header}</h1>
            <p>${content}</p>
        </body>
        </html>
        `);
});

server.listen(3000); */
