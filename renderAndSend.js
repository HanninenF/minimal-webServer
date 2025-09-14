import renderHtmlWithHost from "./renderHtmlWithHost.js";
import routes from "./routes.js";

const filePath = "./index.html";

const selectors = {
  title: "title",
  header: "h1#header",
  statusCode: "p#statusCode",
  server: "p#server",
  content: "p#content",
};

export default async function renderAndSend(
  res,
  req,
  routeKey,
  showServer = true,
  showStatusCode = true
) {
  const statusCodeSelector = showStatusCode ? selectors.statusCode : "";
  const serverSelector = showServer ? selectors.server : "";
  const renderedHtml = await renderHtmlWithHost(
    req,
    filePath,
    selectors,
    serverSelector,
    statusCodeSelector,
    routes[routeKey].title,
    routes[routeKey].content,
    res.statusCode
  );

  res.end(renderedHtml);
}
