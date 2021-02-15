var store = [{
        "title": "LSCS-연속된 부분 배열의 합의 최대값",
        "excerpt":"LSCS 문제설명 정수를 요소로 갖는 배열 주어진 배열의 연속된 부분 배열의 합을 구한다. 이 중 가장 큰 값을 리턴해야 한다. 배열의 모든 요소가 음수인 경우도 있다. let output = LSCS([1, 2, 3]); console.log(output); // --&gt; 6 output = LSCS([1, 2, 3, -4]); console.log(output); // --&gt; 6 LSCS([1, 2, 3, -4,...","categories": ["algorithm"],
        "tags": [],
        "url": "https://sungseokmin.github.io/algorithm/LSCS-algorithm/",
        "teaser": null
      },{
        "title": "최소시간으로 길찾기-완전탐색",
        "excerpt":"Robot Path 문제설명 2차원 배열(room), 현재 지점(src), 도착 지점(dst) 1은 장애물, 0은 이동 가능한 통로를 의미한다. 로봇은 지도 위를 일분에 한 칸씩 상하좌우로 이동 할 수 있다. 로봇의 위치와 목표 지점이 함께 주어질 경우 로봇이 목표 지점까지 도달하는 데 걸리는 최소 시간을 리턴 let room = [ [0, 0, 0,...","categories": ["algorithm"],
        "tags": [],
        "url": "https://sungseokmin.github.io/algorithm/robotPath-algorithm/",
        "teaser": null
      },{
        "title": "Express",
        "excerpt":"Express ? 공식문서 참고 Node.js를 위한 빠르고 대중적인 프레임워크 Middleware를 사용할 수 있다는 큰 장점을 가지고 있다. 설치 방법 npm install express express를 이용한 server 구현 // express 모듈을 가져온다. const express = require('express'); const app = express(); app.get('/', (request, response) =&gt; { res.send('Hello World'); }) app.listen(3000, () =&gt; {...","categories": ["backend","Express"],
        "tags": [],
        "url": "https://sungseokmin.github.io/backend/express/Express-backend/",
        "teaser": null
      },{
        "title": "HTTP",
        "excerpt":"HTTP ? 웹 상에서 client와 server 간에 요청/응답으로 데이터를 주고 받을 수 있는 프로토콜 작동방식 client -&gt; (요청) -&gt; server Server -&gt; (응답) -&gt; client 특징 stateless(무상태성) : 이전 요청이나 다음 요청을 기억하지 않는다. ex) client가 server에게 고기를 먹으러 가자고 요청을 보내자 server는 알겠다고 응답을 한다. 응답을 받은 client는 언제갈까...","categories": ["backend","http"],
        "tags": [],
        "url": "https://sungseokmin.github.io/backend/http/HTTP-backend/",
        "teaser": null
      },{
        "title": "Node.js",
        "excerpt":"Node.js ? V8 JavaScript 엔진으로 빌드된 JavaScript 런타임 즉, 브라우저 외의 다른 환경에서도 사용할 수 있게 해주는 런타임 module 시스템을 구축하고 있다. http server가 내장되어 있다. 설치 방법 공식사이트를 통해 파일을 다운 받을 수 있다. node가 설치되면 npm(Node Package Manager)가 같이 설치 된다. 설치가 되면 터미널을 켠 후 node -v와...","categories": ["backend","node"],
        "tags": [],
        "url": "https://sungseokmin.github.io/backend/node/Node-backend/",
        "teaser": null
      },{
        "title": "React",
        "excerpt":"React ? 페이스북이 만든 라이브러리 JSX : javascript 확장 언어 MVC pattern 중 V(View)를 담당한다. 특징 반드시 하나의 엘리먼트로 감싸야한다. javascript 코드를 적용하고 싶을 때는 {} 안에 작성한다. JSX 내부에서는 if문 대신 삼함연산자를 사용한다. Component System Component : 웹을 잘게 잘게 쪼갠 것 독립적 기능, 재사용 가능 조건부 렌더링 JSX...","categories": ["frontend","React"],
        "tags": [],
        "url": "https://sungseokmin.github.io/frontend/react/React-frontend/",
        "teaser": null
      },{
        "title": "React_hooks",
        "excerpt":"React Hooks ? function Component에서 state를 관리하기 위해 해주는 고마운 녀석 사용 방법 useState : function component에서 상태를 저장하고 수정할 수 있도록 도와준다. import React, {useState} = 'react'; function Login (props) { // 배열의 첫 요소는 값을 저장할 변수 // 배열의 두 번째 요소는 값을 바꿀 변수 const [id, setId]...","categories": ["frontend","React","hooks"],
        "tags": [],
        "url": "https://sungseokmin.github.io/frontend/react/hooks/React_hooks/",
        "teaser": null
      },{
        "title": "React-router-dom",
        "excerpt":"React Router ? SPA : Single Page Application 페이지 깜박임 없이 하나의 페이지로 동작하는 어플리케이션 설치 방법 npm install react-router-dom 사용 방법 react-router-dom 모듈 안에는 각각의 함수들이 있다. BrowserRouter : History API를 사용하고, url과 ui를 동기화 해주는 라우터 Route : user가 원하는 경로와 Route안의 path에 있는 경로가 일치할 경우 해당...","categories": ["frontend","React","Router"],
        "tags": [],
        "url": "https://sungseokmin.github.io/frontend/react/router/React_router/",
        "teaser": null
      },{
        "title": "HTML/CSS",
        "excerpt":"기본적인 HTML 문법 Inline vs Block 대표적으로 span, div Inline은 크기의 영역만큼 차지하고 Block은 한 줄을 차지한다. ul &gt; li 목록을 나타낼 때 사용하는 목록태그 앞의 동그라미를 없애고 싶으면 list-style: none 속성을 주면 된다. li &gt; input input태그는 Inline 속성이므로 ul &gt; li 와 같은 목록 태그로 감싸줘도 된다. li...","categories": ["frontend","html","css"],
        "tags": [],
        "url": "https://sungseokmin.github.io/frontend/html/css/CSS-frontend/",
        "teaser": null
      },{
        "title": "2 weeks project",
        "excerpt":"Shape Of Voice 사람의 목소리 파동을 이용해 채도, 명도, 색을 다르게 나타내는 이미지를 생성하는 웹 schema user : 각 유저들의 정보 voice : 목소리에 대한 정보 board : 게시글에 대한 정보 voice_board : voice table과 board table의 join table user_board_like : 특정 user가 어떠한 게시판의 좋아요를 눌렀는지에 대한 table Wire...","categories": ["project","2 weeks project"],
        "tags": [],
        "url": "https://sungseokmin.github.io/project/2%20weeks%20project/Project-1/",
        "teaser": null
      },{
        "title": "FlexBox",
        "excerpt":"FlexBox (부모 속성) flex-direction: 주축 - 기본 값 : row flex-wrap : 창의 너비에 따라 줄 바꿈 - 기본 값 : nowrap justify-content : 중심축과 기준으로 정렬 - 기본 값 : flex-start align-itmes : 교차축을 기준으로 정렬 - 기본 값 : flex-start 가로로 정렬된 모습을 볼 수 있다. display: flex;...","categories": ["frontend","flexbox"],
        "tags": [],
        "url": "https://sungseokmin.github.io/frontend/flexbox/Flex/",
        "teaser": null
      },{
        "title": "2 weeks project_시연영상",
        "excerpt":"   Login          SignUp          TempLogin          Capture &amp; Clear          AddBoard          BoardDetail          MyPage          Logout      ","categories": ["project","2 weeks project"],
        "tags": [],
        "url": "https://sungseokmin.github.io/project/2%20weeks%20project/Project-2/",
        "teaser": null
      },{
        "title": "Redux",
        "excerpt":"Redux action : store(저장소)로 data를 보내는 방법 // actions -&gt; index.js export const LOGIN = 'LOGIN'; export const LOGOUT = 'LOGOUT'; export const login = () =&gt; { return { type: LOGIN, payload : (생략가능) } } export const logout = () =&gt; { return { type: LOGOUT, payload :...","categories": ["frontend","redux"],
        "tags": [],
        "url": "https://sungseokmin.github.io/frontend/redux/Redux/",
        "teaser": null
      }]
