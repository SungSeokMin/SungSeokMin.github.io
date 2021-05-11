---
title: 'JavaScript'
layout: category-interview
categories:
  - interview
toc: true
---

> ## var, let, const 차이점

- var는 함수레벨이 하나의 유효범위를 가지고 let과 const는 블럭레벨이 하나의 유호범위를 가진다.

> ## scope

- 변수에 접근할 수 있는 유효범위

  - 함수 스코프 (var)

    - 함수 외부에서 함수 내부의 변수에 접근 불가

  - 블럭 스코프 (let, const)
    - 블럭 외부에서 블럭 내부의 변수에 접근 불가

> ## Closure

- 내부 함수가 외부 함수의 지역변수에 접근 할 수 있는 것으로 변수를 private하게 사용하고 싶을 때 closure를 사용한다.

> ## Callback

- 파라미터로 함수를 전달 받아, 함수의 내부에서 실행하는 함수
  - 때가 되면 나중에 호출 한다는 것이 콜백함수의 기본 개념

> ## this

- 일반 함수는 호출 위치에 따라 this가 정의
  - 일반 함수 실행
  - dot notaition (객체의 메소드 실행)
  - new 키워드
  - call, apply, bind 실행
- 화살표 함수는 자신이 선언된 함수 범위에서 this가 정의

> ## Event Loop

- Memory Heap
  - 메모리 할당이 일어나는 곳
  - Heap ?
    - 구조화되지 않은 메모리 영역
    - 객체(변수, 함수)들이 담김
- Call Stack

  - 실행될 코드의 한 줄 단위로 할당

- Web APIs

  - 비동기 처리를 담당

- Callback Queue

  - 비동기 처리가 끝난 후 실행되어야 할 콜백 함수가 차례로 할당

- Event Loop
  - Queue에 할당된 함수를 순서에 맞춰 Call Stack에 할당

### 비동기 처리 함수가 있는 경우

1. 함수가 실행되면 Call Stack에 쌓이고 출력된다.
2. 다음 함수가 비동기 처리 일 경우 Web APIs로 이동되고
3. 비동기 처리가 끝나면 Callback Queue로 이동된다.
4. 이때 Event Loop는 Call Stack이 비었는지 확인
5. 비어있으면 Call Stack으로 이동 후 출력, 비어있지 않으면 Call Stack이 출력 될 때 까지 기다린다.
6. 남아있던 Call Stack이 다 출력 될 경우 Callback Queue에서 Call Stack으로 이동된다.
7. Call Stack으로 이동된 비동기 처리 함수들이 출력된다.
