# mini-server

mini sprint for chatterbox-server sprint

# Getting started

- server
  `node server/basic-server.js`
- client
  client/index.html 을 크롬으로 켜시면 됩니다.

# Basic requirements

- 클라이언트 코드는 작성하지 않으셔도 됩니다.
- 서버는 POST 요청에 대한 응답을 줄 수 있어야 합니다.
- /lower url 로 온 post 요청은 문자열을 소문자로 만들어서 응답 하여야 합니다.
- /upper url 로 온 post 요청은 문자열을 대문자로 만들어서 응답 하여야 합니다.
- 서버는 POST 요청 이외에는 잘못된 요청임을 클라이언트에 알려줄 수 있어야 합니다.
- 브라우저 보안 이슈로 인해 발생하는 OPTIONS method를 처리할 수 있어야 합니다.
