---
title: 'HTTP'
layout: category-backend
categories:
  - backend
  - http
toc: true
---

> ## HTTP ?

- 웹 상에서 client와 server 간에 요청/응답으로 데이터를 주고 받을 수 있는 프로토콜

### 작동방식

- client -> (요청) -> server
- Server -> (응답) -> client

### 특징

- stateless(무상태성) : 이전 요청이나 다음 요청을 기억하지 않는다.
  - ex) client가 server에게 고기를 먹으러 가자고 요청을 보내자 server는 알겠다고 응답을 한다.
  - 응답을 받은 client는 언제갈까 라고 server에게 요청을 보내지만 server는 무엇을? 이라는 응답을 한다.
- connectionless(무연결성) : 한번의 요청에는 한번의 응답을 한다.
  - ex) client가 server에게 뭐해?, 바빠?, 어디갈까? 라는 요청을 한번에 보낼 수 없다는 뜻!!

### 메소드

- GET : 서버로부터 정보를 조회하기 위해 설계된 메소드
  - 브라우저에서 웹페이지를 열거나 게시물을 읽는 등 조회하는 행위는 GET 요청
- POST : 기존에 없던 리소스를 생성/변경하기 위해 설계된 메소드
  - 기존에 없던 게시글을 작성하는 행위 등은 POST 요청
  - 데이터가 Body로 전송된다.
- PUT : 기존에 있던 리소스를 변경하기 위해 설계된 메소드
  - 기존에 있던 게시글을 수정하는 행위 등은 PUT 요청
- DELETE : 리소스를 삭제하기 위해 설계된 메소드
  - 게시글 삭제
- OPTIONS, TRACE, CONNECT ...

### GET, POST의 차이

- GET은 서버에게 동일한 요청을 여러 번 전송하더라도 동일한 응답이 돌아와야 하고
  - 서버의 데이터나 상태를 변경시키지 않아야 한다.
- POST는 서버에게 동일한 요청을 여러 번 전송해도 응답이 항상 다를 수 있다.
  - 서버의 데이터나 상태를 변경 시킬 수 있다.

### HTTP HEADER

![Headers](/img/header.png)

### Response Status

![응답코드](/img/request_status.png)
