---
title: 'React'
layout: category-frontend
categories:
  - frontend
  - React
toc: true
---

> ## React ?

- 페이스북이 만든 라이브러리
- JSX : javascript 확장 언어
- MVC pattern 중 V(View)를 담당한다.

### 특징

- 반드시 하나의 엘리먼트로 감싸야한다.
- javascript 코드를 적용하고 싶을 때는 {} 안에 작성한다.
- JSX 내부에서는 if문 대신 삼함연산자를 사용한다.
- Component System
  - Component : 웹을 잘게 잘게 쪼갠 것
    - 독립적 기능, 재사용 가능

### 조건부 렌더링

- JSX 문법 에서는 삼항연산자를 사용한다.

```
{
  1+1 === 2 ? (<div>정답</div>) : (<div>오답</div>)

  // 조건이 true일 때만 보여준다.
  1+1 === 2 && (<div>정답</div>)
}
```

### 설치 방법

- 터미널을 켜고 다음과 같이 수행

```
npx create-react-app [폴더 이름]
cd [폴더 이름]

// 실행
npm start
```

### function Component VS class Component

- Component : JavaScript 함수와 유사하며, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환한다.
- props : 부모 Component로부터 물려받은 속성
  - 순수 함수처럼 작동해야한다.
    - 순수 함수 : 입력값을 바꾸려 하지 않고 항상 동일한 입력값에 대해 동일한 결과를 반환해야 한다.
- state : 해당 Component에서 사용할 수 있는 상태
- state는 직접적인 수정이 불가능하다!! 반드시 setState를 통해 state의 값을 변경해준다.

#### function Component

```
function Login(props) {
  return <h1>로그인 화면</h1>
}
```

#### class Component

```
class Login exntends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id = 'sung';    // 직접 수정 불가 !! 변경하려면 아래와 같이 setState를 사용해야 한다.
    };
  }

  changeId = () => {
    this.setState({id: 'seok'});
  }

  render() {
    return <h1>로그인 화면<h1>
  }
}
```

### 흐름을 이해해보세요 !

index.js

```
import React, {Component} from 'react';
import Mypage from './Mypage.js' // .js는 생략 가능

class App extends Component {
  constructor(props) {
    super(props);

    // id, age, hobby라는 state(상태)를 가지고 있다.
    this.setState = {
      id : 'sung',
      age : 27,
      hobby: 'coding'
    }
  }

  render() {
    return <div>      // id와 age라는 이름으로 Mypage 컴포넌트로 props를 전달
      <Mypage id={this.state.id} age={this.state.age} />
    </div>
  }
}

export default App;
```

mypage.js

```
import React from 'react'

// 구조분해할당으로 값을 받아올 수 있다.
const Mypage = ({id, age}) => {
  return (
    <div>
      <div>{id}</div>
      <div>{age}</div>
    </div>
  )
}

또는

const Mypage = (props) => {
  return (
    <div>
      <div>{this.props.id}</div>
      <div>{this.props.age}</div>
    </div>
  )
}

export default Mypage
```

### React Lifecycle

```
constructor -> render -> componentDidMount ->
(setState/props 바뀔 때) -> ComponentDidUpdate -> render ->
(부모가 자식 component를 없앨 때 ) -> componentWillUmmount -> 소멸
```

![](/img/lifecycle.png)
