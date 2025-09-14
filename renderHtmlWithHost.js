import { readFile } from "node:fs/promises";
import * as cheerio from "cheerio";

export default async function renderHtmlWithHost(
  req,
  filePath,
  selectors,
  server,
  statusCodeSelector,
  title,
  content,
  statusCode
) {
  const fileContent = await readFile(filePath, "utf8");

  const $ = cheerio.load(fileContent);

  const host = req.headers.host;

  $(server).text(`servern körs på ${host}`);
  $(selectors.title).text(title);
  $(selectors.header).text(title);
  $(statusCodeSelector).text(statusCode);
  $(selectors.content).html(content);
  const outputHtml = $.html();
  return outputHtml;
}
