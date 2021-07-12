---
title: '자바스크립트와 웹 브라우저'
layout: category-frontend
categories:
  - frontend
  - javascript
toc: true
---

> ## HTML, CSS, JavaScript

HTML : 웹 페이지의 구조를 나타냄

CSS : 웹 페이지 안에 존재하는 요소들의 스타일을 나타냄

JavaScript : 문서의 구조와 스타일에 변화를 줄 수 있음

> ## Window Object

#### JavaScript 실행시 가장 상위에 존재하는 객체

- window.location : 현재 브라우저 창의 주소를 나타내는 객체
- window.location.href : 브라우저 창에 입력된 주소, 변경 가능
- window.navigator : 브라우저 자체에 대한 정보
- window.screen : 디스플레이의 사이즈
- <span style="color: orange">window.document</span> : 웹 페이지 문서의 HTML, CSS 등에 대한 접근 가능

> ## DOM(Document Object Model)

#### 컴퓨터가 문서를 잘 처리할 수 있도록 문서의 구조를 약속한 것 (tree 형태를 따름)

자식, 부모 엘리먼트에 접근하는 방법

- .children : 해당 object의 자식 노드에 대한 배열
- .parentNode : 부모 노드
- .firstElementChild : 첫 자식 엘리먼트
- .lastElementChild : 마지막 자식 엘리먼트

같은 레벨의 형제 엘리먼트에 접근하는 방법

- .nextElementSibling
- .previousElementSibling

DOM API를 활용해 문서의 엘리먼트를 선택하는 방법

- querySelector('태그이름') : HTML element 태그를 전달하면 해당 엘리먼트가 반환됨
- querySelector('.class') : HTML element 태그의 class를 전달하면 해당 엘리먼트가 반환됨
- querySelector('#id') : HTML element 태그의 id를 전달하면 해당 엘리먼트가 반환됨
- querySelectorAll() : HTML element 태그의 모든 class 또는 id를 전달하면 해당되는 엘리만트가 전부 반환됨

Element API

- .innerHTML : 엘리먼트 안의 HTML코드를 변경
- <span style="color: orange">.innerText</span> : 엘리먼트 안의 텍스트를 변경
- .style : css를 변경 가능
- .value : input 엘리먼트에 입력된 값을 얻어올 수 있음
- getAttribute('속성 이름') : 엘리먼트의 속성 값을 얻어옴
- setAttribute('속성 이름', '설정할 속성의 값') : 엘리먼트의 속성 값을 설정함
- <span style="color: orange">.createElement()</span> : 문자열 인자로 tag를 입력하면 해당 엘리먼트가 생성돼 반환됨
- <span style="color: orange">.appendChild(인자)</span> : 추가할 element를 인자로 받아 호출된 element의 자식으로 인자를 추가함
- <span style="color: orange">.removeChild(인자)</span> : 삭제할 element를 인자로 받아 호출된 element의 자식중에서 해당 element를 삭제
- <span style="color: orange">.insertBefore(인자1,인자2)</span> : 인자1로 받은 element를 호출된 element의 자식중 인자2의 이전에 추가함
- <span style="color: orange">.cloneNode()</span> : 호출된 element를 복사해서 반환함

> ## Callback Function

조건을 등록해 두고 그 조건을 만족한 경우, 나중에 호출되는 함수

- setTimeout(function, time) : 해당 시간(밀리세컨드 단위 1/1000초)이 지나면 function을 콜백하는 함수,
  - timerId를 반환
- clearTimeout(timerId) : timerId를 인자로 받아 예약되어 있던 function호출을 취소
- setInterval(function, time) : 해당 시간이 경과할 때마다 function 함수를 콜백하는 함수
  - intervalId를 반환
- clearInterval(IntervalId) : intervalId를 인자로 받아 주기적으로 호출되던 function 호출을 취소

```
function callback () {
  console.log('callback');
}

// 3초 뒤에 callback 함수가 호출
setTimeout(callback, 3000) -> timerId : 1

// 3초 마다 callback 함수가 호출
setInterval(callback, 3000); -> intervalId : 2

clearInterval(2);
```

> ## JavaScript EventHandler 설정

[MDN 이벤트](https://developer.mozilla.org/ko/docs/Web/Events)

- addEventListener(이벤트, 함수) : 이벤트 등록
- removeListener(이벤트, 함수) : 이벤트 삭제

```
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <button class="btn">클릭</button>
  <input type="text" class="userName"/>

  <script>
    const getBtn = document.querySelector('.btn');

    getBtn.addEventListener('click', () => {
      console.log('버튼이 클릭 되었습니다.);
    })

    const getInput = document.querySelector('.userName');

    getInput.addEventListener('keydown', () => {
      console.log('키보드가 눌렸습니다');
    })
  </script>
</body>
</html>
```

## AJAX(Asynchronous JavaScript and XML)

- 자바스크립트를 이용해서 <span style="color: orange">비동기적</span>으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방법
- 사용자에게 더 나은 사용 경험 제공, 대부분의 웹사이트에서 사용되고 있는 기술

```
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
  </head>
  <body>
    <script>
      // AJAX를 위한 객체 생성
      const req = new XMLHttpRequest();

      // 요청의 방식과 URL 설정
      req.open('GET', './data.txt');

      // 요청 전송
      req.send();
    </script>
  </body>
</html>
```

#### 응답 확인

- req.response에 저장됨
- 비동기 방식으로 요청하기 때문에 send 메소드 호출 후, 바로 코드에서 접근하면 데이터가 비어 있음

#### HTTP 응답 코드

![응답코드](https://user-images.githubusercontent.com/72539723/125258673-880b1200-e339-11eb-88b7-f0a5ba2724ce.png)

> ## JSON(Javascript Object Notification)

자바스크립트의 객체를 문자열로 표현하는 방법

- JSON.stringify(object) : 인자로 받은 객체를 JSON 문자열로 반환
- JSON.parse(string) : 인자로 받은 문자열을 Javascript Object로 변경해 반환

❗️ <span style="color: orange">undefined</span>, <span style="color: orange">function</span>은 변한되지 않는다. ❗️

```
const obj = {
  name: '성석민',
  age: '27',
  hobby: undefined,
  method : function a() {console.log('Hello JSON')}
}

const getJSON = JSON.stringify(obj)
console.log(getJSON) => "{"name":"성석민","age":"27"}"

JSON.parse(getJSON) => {name: "성석민", age: "27"}
```

> ## AJAX를 통해 JOSN 데이터 가져오기

```
JSON

[
{"id" : "배우1" , "msg" : "대사1"},
{"id" : "배우2" , "msg" : "대사2"},
{"id" : "배우3" , "msg" : "대사3"},
{"id" : "배우4" , "msg" : "대사4"},
{"id" : "배우5" , "msg" : "대사5"},
{"id" : "배우6" , "msg" : "대사6"}
]
```

![AJAX + JSON](https://user-images.githubusercontent.com/72539723/125263990-6f512b00-e33e-11eb-92a0-9515104e0212.png)
