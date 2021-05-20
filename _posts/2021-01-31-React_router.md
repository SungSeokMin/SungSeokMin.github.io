---
title: 'React-router-dom'
layout: category-frontend
categories:
  - frontend
  - React
  - Router
toc: true
---

> ## React Router ?

- SPA : Single Page Application
  - 페이지 깜박임 없이 하나의 페이지로 동작하는 어플리케이션

### 설치 방법

```
npm install react-router-dom
```

### 사용 방법

1. BrowserRouter로 Route를 감싸준다.
2. Route 컴포넌트에 경로(path)와 컴포넌트(component)를 설정해서 나열한다.
3. 브라우저에 요청한 경로에 Route의 path가 들어있으면 해당 Component를 보여준다.

```
// App.js

import { BrowserRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/about" component={About}></Route>
    </BrowserRouter>
  );
}

export default App;
```

> ## Dynamic 라우팅

1. URI 마지막 부분에 <:원하는 값>을 넣어준다.

```
// App.js

=> :id 부분은 id가 아니더라도 원하는 문자열이 될 수 있다.

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/profile/:id" component={Profile}></Route>
    </BrowserRouter>
  );
}
```

URI => http://localhost:3000/profile/1

```
// Profile.js

=> App.js에서 :id로 path를 설정했기 때문에 Profile.js에서 id로 가져올 수 있다.
=> props.match.params.id로 가져온 값의 타입은 string이다.
  -> number 타입으로 사용하고 싶다면 Numner(props.match.params.id);

const Profile = (props) => {
  console.log(props); => ↓ 사진 첨부

  const id = props.match.params.id;
  console.log(id, typeof id); // 1, string

  return <div>Profile Page</div>;
};
```

<img width="545" alt="스크린샷 2021-05-20 오후 3 50 26" src="https://user-images.githubusercontent.com/72539723/118932542-1d65d780-b983-11eb-97f2-d9a9ad4a8d5a.png">
