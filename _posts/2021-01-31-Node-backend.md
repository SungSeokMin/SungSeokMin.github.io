---
title: 'Node.js'
layout: category-backend
categories:
  - backend
  - node
toc: true
---

> ## Node.js ?

- V8 JavaScript 엔진으로 빌드된 JavaScript 런타임
- 즉, 브라우저 외의 다른 환경에서도 사용할 수 있게 해주는 런타임
- module 시스템을 구축하고 있다.
- http server가 내장되어 있다.

### 설치 방법

- [공식사이트]('https://nodejs.org')를 통해 파일을 다운 받을 수 있다.
- node가 설치되면 npm(Node Package Manager)가 같이 설치 된다.
- 설치가 되면 터미널을 켠 후 node -v와 npm -v를 입력해본다.

> ## npm ?

- 패키지를 모아놓은 저장소, 이미 만들어져 있는 패키지들을 사용할 수 있게 해주는 도구
- 패키지들을 체계적으로 관리하기 위해서 package.json을 생성한다. 패키지명, 패키지 버전을 기록한다.
- package.json 생성방법
  - npm init
- npm install [package Name]을 이용해 패키지들을 다운 받을 수 있다.
  - ex) npm install express

> ## package.json ?

- 패캐지들을 체계적으로 관리하기 위해서 필요한 파일

### dependencies, devDependencies

- dependencies ?
  - 프로젝트에 필요한 패키지들의 이름과 버전을 기록
    - ex) express, cors, sequelize, mysql2 ...
    - 설치) npm install express
- devDependencies ?
  - 프로젝트 개발에 필요한 패캐지들의 이름과 버전을 기록
    - ex) nodemon, eslint, prettier ...
    - 설치) npm install nodemon --save-dev

### server 구현

```
// http 모듈을 불러온다.
const http = require('http');
const url = require('url');

// http://localhost:3000 확인 가능
http.createServer((request, response) => {

  // user가 요청한 url에서 path를 가져온다.
  const path = url.parse(request.url, true).pathname;

  // user가 요청한 method가 GET, POST, 그 외 일 경우
  if(request.method === 'GET') {
    // path가 /일 경우
    if(path === '/') {
      ...
    }
  } else if(request.method === 'POST') {
    ...
  } else {
    ...
  }

}).listen(3000);
```
