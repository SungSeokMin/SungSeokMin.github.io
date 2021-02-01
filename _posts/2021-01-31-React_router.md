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

- react-router-dom 모듈 안에는 각각의 함수들이 있다.
  - BrowserRouter : History API를 사용하고, url과 ui를 동기화 해주는 라우터
  - Route : user가 원하는 경로와 Route안의 path에 있는 경로가 일치할 경우 해당 컴포넌트를 렌더링 한다.
  - Link : html의 a태그와 비슷하다.
  - Switch : Route 태그를 순서대로 확인한 후, 첫 번째로 일치하는 Route로 렌더링 한다.
  - withRouter : match, history, location을 Props로 전달해주는 역할

```
import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch, withRouter} from 'react-router-dom';

function MyPage (props) {
  return (
    <BrowserRouter>
      <div className='menu'>
        <Link to='/'></Link>
        <Link to='/login'>로그인</Link>
        <Link to='/mypage'>마이페이지</Link>
      </div>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/login' component={Home} />
        <Route path='/mypage'component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
```
