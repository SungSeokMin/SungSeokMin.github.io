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

> ## Dynamic 라우팅 1

Route의 path부분의 마지막에 ":원하는 값" 을 넣어준다.

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

### react-router-dom의 hooks의 useParams();

```
// Profile.js

=> App.js에서 :id로 path를 설정했기 때문에 Profile.js에서 id로 가져올 수 있다.

import {useParams} from 'react-router'

const Profile = () => {
  const params = useParams();

  const id = params.id;
  console.log(id, typeof id); // 1, string

  return <div>Profile Page</div>;
};
```

<img width="545" alt="스크린샷 2021-05-20 오후 3 50 26" src="https://user-images.githubusercontent.com/72539723/118932542-1d65d780-b983-11eb-97f2-d9a9ad4a8d5a.png">

> ## Dynamic 라우팅 2

Query string을 이용

- query string의 값을 편하게 가져오기 위해 모듈 사용
  - npm install query-string

```
// App.js

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </BrowserRouter>
  );
}
```

URI => http://localhost:4000/about?name=sung

```
// About.js

import queryString from 'query-string';

const About = (props) => {

  const searchParams = props.location.search;
  const query = queryString.parse(searchParams);

  console.log(query) => {name: sung}

  return <div>About page</div>;
};
```

> ## Switch & NotFound

Route를 Switch로 감싸준다.

- 링크와 매치되는 첫 번째 라우트만 보여준다.
- 링크와 매치되지 않는 경로가 있다면 NotFound 페이지를 보여줄 수 있다.

```
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile/:id" component={Profile}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
```

> ## a Tag VS Link Tag

### a

- 페이지 이동 시 로딩이 되면서 파일들을 다시 다운받는다.
  - React의 특성을 살리지 못한다.

### Link

- 페이지 이동 시 로딩이 되지 않고 파일들을 다시 다운받지 않는다.
  - React의 특성을 살릴 수 있다.

```
import { Link } from 'react-router-dom';

function Links() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/profile/:id">Profile/1</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/about?name=mark">About/name=mark</Link>
      </li>
    </ul>
  );
}
```
