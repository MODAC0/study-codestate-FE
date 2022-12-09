const http = require("http");
const PORT = 4999;
const ip = "localhost";

const server = http.createServer((request, response) => {
  // todo: 클라이언트의 preflight request에 대한 응답을 작성해야 한다.
  // * 만약 요청 메서드가 options이면
  if (request.method === "OPTIONS") {
    // * CORS 설정
    // writeHead 메서드를 사용하여 200 헤더 데이터를 전송한다
    response.writeHead(200, defaultCorsHeader);
    // end 메서드를 사용하여 모든 응답 헤더와 본문이 전송되었음을 서버에 알림.
    response.end("hello mini-server sprints");
  }
  // todo: 요청 메서드가 post, 요청 url이 ../lower일 때 응답.end에는 소문자로 변환된 body값이 담겨야 한다.
  if (request.method === "POST") {
    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
        // 빈배열에 청크를 담는다.
      })
      .on("end", () => {
        // end 이벤트에서 이어 붙이고 문자열로 변환
        body = Buffer.concat(body).toString();
        // writeHead 메서드를 사용하여 201 헤더 데이터를 전송한다
        response.writeHead(201, defaultCorsHeader);
        // url의 엔드포인트가 lower일 때 응답데이터에 문자열 body를 소문자로 변환하여 반환
        if (request.url === "/lower") response.end(body.toLowerCase());
        // url의 엔드포인트가 upper일 때 응답데이터에 문자열 body를 대문자로 변환하여 반환
        else if (request.url === "/upper") response.end(body.toUpperCase());
        //
        else {
          response.writeHead(404, defaultCorsHeader);
          response.end();
        }
      });
  }
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Access-Control-Max-Age": 10,
};
