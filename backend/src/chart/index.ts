import http from "http";

http
  .createServer((req, res) => {
    var html = buildHtml(req);

    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": html.length,
      Expires: new Date().toUTCString(),
    });
    res.end(html);
  })
  .listen(8080);

function buildHtml(req: http.IncomingMessage) {
  var header = "";
  var body = "";

  // concatenate header string
  // concatenate body string

  return (
    "<!DOCTYPE html>" +
    "<html><head>" +
    header +
    "</head><body>" +
    body +
    "</body></html>"
  );
}
