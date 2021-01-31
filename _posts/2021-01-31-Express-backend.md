---
title: 'Express'
layout: category-backend
categories:
  - backend
  - Express
toc: true
---

> ## Express ?

- [공식문서](https://expressjs.com/ko/) 참고
- Node.js를 위한 빠르고 대중적인 프레임워크
- Middleware를 사용할 수 있다는 큰 장점을 가지고 있다.

### 설치 방법

```
npm install express
```

### express를 이용한 server 구현

```
// express 모듈을 가져온다.
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  res.send('Hello World');
})

app.listen(3000, () => {
  console.log('Express Start')
})
```

### Routing

- method(GET, POST, PUT, DELETE ...)와 url에 따른 분기
- 즉, url 및 특정 HTTP 요청 메소드인 엔드포인트(ex... '/mypage')에 대한 client 요청에 application이 응답하는 방법을 결정하는 것

```
const express = require('express');
const app = express();

// http://localhost:3000/ 경로로 이동할 경우 화면에 Hello가 출력된다.
app.get('/', (req, res) => {
  res.status(200).send('Hello');
})

app.get('/mypage', (req,res) => {
  res.status(200).send('MyPage');
})

app.post('경로', (req, res) => {
  TODO :
})

app.delete('경로', (req, res) => {
  TODO :
})

app.listen(3000, () => {
  console.log('Express Start')
})
```

### Middleware

- 요청과 응답 중간에 껴서 어떠한 동작을 실행해주는 프로그램
- 대표적인 Middleware
  - morgan : request를 loggin 해주는 미들웨어
  - cors : 현재 도메인에서 다른 도메인으로 리소스 요청 할 경우 제한을 정해주는 미들웨어
    - Cross Origin Resource Sharing의 약자
  - express-session : 서버가 세션을 이용하게 해주고 쿠키에 세션 정보를 담을 수 있게 해주는 미들웨어

### 설치 방법

```
npm install morgan
npm install cors
npm install express-session
```

### 사용 방법

```
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');

// 요청에 대한 본문을 해석해주는 미들웨어
app.use(express.json());

// post로 요청된 body를 쉽게 추출할 수 있는 미들웨어
app.use(express.urlencoded({extended: false}));

// morgan 미들웨어 사용
app.use(logger('dev'));

// cors 미들웨어 사용
app.use(
  cors({
    origin: 'https://localhost:3000',
    methods: ['GET', 'POST', 'UPDATE', 'OPTIONS'],
    credentials: true,
  })
);

// express-session 미들웨어 사용
app.use(session({
  secret: **필수항목** 비밀 키
  resave: false,
  saveUninitialized: false,
  cookie: {
    // 서버와 요청의 도메인이 일치하는 경우 쿠키 전송
    domain: 'localhost',

    // 서버의 요청의 세부경로가 일치하는 경우 쿠키 전송
    path: '/',

    // maxAge, expires => 쿠키의 유효기간 설정
    maxAge: 24 * 6 * 60,

    // 스크립트의 쿠키 접근 가능 여부 설정
    httpOnly: true,

    // HTTPS에서만 쿠키 전송 여부 설정
    secure: true,

    // CORS 요청의 경우, 옵션 및 메소드에 따라 쿠키 전송 여부 설정
    sameSite: 'none'
  }
}))

app.listen(3000, () => {
  console.log('Express Start');
})
```
