const http = require('http');

const PORT = 5000;

const ip = 'localhost';

const server = http.createServer((request, response) => {
  let headers = defaultCorsHeader;
  /*
  HINT:
    request 의 method 와 url을 활용하여 클라이언트의 요청을 분기 할 수 있어야 합니다.
    잘못된 요청은 잘못된 요청이라는 응답을 주어야 합니다.
  */
  console.log(
    `http request method is ${request.method}, url is ${request.url}`
  );
  response.writeHead(200, headers);
  response.end('hello mini-server sprints');
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10
};
