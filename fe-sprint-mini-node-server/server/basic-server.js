const http = require("http");

const PORT = 5500;

const ip = "localhost";

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    if (req.url === "/lower") {
      let data = "";
      req.on("data", (chunk) => {
        data = data + chunk;
      });
      req.on("end", () => {
        data = data.toLowerCase();
        res.writeHead(201, defaultCorsHeader);
        res.end(data);
      });
    } else if (req.url === "/upper") {
      let data = "";
      req.on("data", (chunk) => {
        data = data + chunk;
      });
      req.on("end", () => {
        data = data.toUpperCase();
        res.writeHead(201, defaultCorsHeader);
        res.end(data);
      });
    } else {
      res.writeHead(404, defaultCorsHeader);
      res.end();
    }
  }
  if (req.method === "OPTIONS") {
    res.writeHead(200, defaultCorsHeader);
    res.end();
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

// const PORT = 5500;
// const ip = "localhost";

// const express = require("express");
// const app = express();
// const cors = require("cors");

// app.use(cors());
// app.use(express.static("client"));
// //express.static(root, [options]) - 정적 파일을 제공
// //루트 인수는 정적 자산을 제공할 루트 디렉토리를 지정, req.url을 제공된 루트 디렉토리와 결합하여 제공할 파일을 결정합니다.
// app.use(express.json({ strict: false }));
// //json은 obj; -> 다른 데이터 타입도 허용해주기 위해 false

// //express.json() ->  JSON 페이로드로 들어오는 요청을 구문 분석하고

// //JSON 형태 "{\"sender\":\"김코딩\",\"receiver\":\"박해커\",\"message\":\"해커야 오늘 저녁 같이 먹을래?\"}"

// //바디 파서를 기반으로 합니다.express.json() === JSON.parse()

// //밑에 처럼 다시 사람이 읽을 수 있는 문자로 만드는것
// //{sender: "김코딩", receiver: "박해커", message: "해커야 오늘 저녁 같이 먹을래?"}

// //반대는 JSON.stringify() 인것, 이건 객체로 받은걸 const message = {sender: "김코딩"}
// //객체를 JSON으로 변환시킨다. "{"sender":"김코딩"}" 이런식으로!

// //strict이 true일때 배열이나 객체일 때만 파서해준다
// //strict이 false일때 모든값 허용해서 파서해준다
// //블로그 참고 https://semtax.tistory.com/7

// //get 메소드일 때
// app.get("/", function (req, res) {
//   res.send("hello");
// });

// //post 메소드일 때
// app.post("/upper", function (req, res) {
//   //console.log(req.body); //파싱이 안되면 undefined가 나온다.
//   let output = req.body; //req.body에는 JSON의 형태로 payload가 담겨져 있습니다.
//   output = output.toUpperCase(); //대문자로 바꾸고
//   //console.log(output);
//   res.json(output);
// });

// app.post("/lower", function (req, res) {
//   //console.log(req.body);
//   let output = req.body; //req.body에는 JSON의 형태로 payload가 담겨져 있습니다.
//   output = output.toLowerCase();
//   //console.log(output);
//   res.json(output);
// });

// app.listen(PORT, ip, () => {
//   console.log(`http server listen on ${ip}:${PORT}`);
// });
