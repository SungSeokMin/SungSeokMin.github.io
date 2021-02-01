---
title: 'React_hooks'
layout: category-frontend
categories:
  - frontend
  - React
  - hooks
toc: true
---

> ## React Hooks ?

- function Component에서 state를 관리하기 위해 해주는 고마운 녀석

### 사용 방법

- useState : function component에서 상태를 저장하고 수정할 수 있도록 도와준다.

```
import React, {useState} = 'react';

function Login (props) {
  // 배열의 첫 요소는 값을 저장할 변수
  // 배열의 두 번째 요소는 값을 바꿀 변수
  const [id, setId] = useState('') // useState를 통해 id값을 저장, id = '';
  const [password, setPassword] = useState('')

  return (
    <div>
      <h1>로그인 페이지</h1>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
  )
}
```

- useEffect : Component가 렌더링 될 때 마다 특정 작업을 수행하도록 설정할 수 있도록 도와준다.

```
import React, {useState, useEffect} = 'react';

function Login (props) {
  // 배열의 첫 요소는 값을 저장할 변수
  // 배열의 두 번째 요소는 값을 바꿀 변수
  const [id, setId] = useState('') // useState를 통해 id값을 저장, id = '';
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log('렌더링 완료') // 밑의 onChange로 인해 계속 id와 password가 쳐질 때 마다 useEffect가 호출된다.
                            // 그렇게 되면 너무 비효율 적이겠지요 ?? 그럼 어떻게 하냐 !! 아래 참고~
  })

  // 두 번째 인자로 빈 배열을 넣어준다. => 처음 렌더링 될 때만 호출된다
  useEffect(() => {
    console.log('componentDidMount와 같은 효과');   // 그럼 update될 때 마다 호출하고 싶다면 어떻게 ? 아래 참고 ~
  }, [])

  // 특정 값이 변경이 될 때만 호출
  useEffect(() => {
    console.log('id가 바뀔 때 마다 )
  }, [id])

  // 마운트(처음 나타났을 때), 언마운트(사라질 때) 관리
    useEffect(() => {
      console.log('Hi!!!')
      return () => {
        console.log('bye...');
      }
    })

  return (
    <div>
      <h1>로그인 페이지</h1>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
  )
}
```
