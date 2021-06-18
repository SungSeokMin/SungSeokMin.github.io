---
title: 'TypeScript'
layout: category-frontend
categories:
  - frontend
  - typescript
toc: true
---

> ## TypeScript ?

- 자바스크립트에 타입을 적용시켜서 컴파일 환경에서 보다 쉽게 에러를 핸들링 할 수 있게 도와주는 프로그래밍 언어

### never

- 함수의 리턴 타입으로 사용(오류를 출력하거나 리턴 값을 내보내지 않음)

```
function error(message: string): never {
  throw new Error(error);
}

function fail() {
  return error('fail');
}

function infinitieLoop(): never {
  while(true){}
}
```

### void

- void : 함수의 리턴 타입으로 사용(어떤 타입도 가지지 않는 빈 상태를 의미)

```
function returnVoid(message: string) {
  console.log(message);
}

returnVoid('리턴이 없다');
```

### Tuple

- Primitive type의 순서를 정확히 아는 경우 사용

```
let x: [string, number] = ['sung', 27]; // good!!
let y: [string, number] = ['sung', '스물일곫'] // error!!
```

### Union Type

- 타입이 2개이상으로 될 것으로 기대할 때 사용

```
let x: string | number = '안녕하세요'; // good!!
또는
let x: string | number = 150; // good!!
```

### 타입 추론(Type Inference)

- TypeScript에서는 타입 표기가 없는 경우 자체에서 코드를 읽고 분석하여 타입을 유추해낼 수 있다.

<img width="526" alt="스크린샷 2021-02-17 오전 11 17 55" src="https://user-images.githubusercontent.com/72539723/108147326-f98bbf00-7111-11eb-877e-636402e29ca2.png">

### 타입 명시

- 변수를 선언할 때, 변수 값의 타입을 명시함으로써 변수 값의 데이터 타입을 지정하는 것

<img width="614" alt="스크린샷 2021-02-17 오전 11 36 40" src="https://user-images.githubusercontent.com/72539723/108148564-6902ae00-7114-11eb-9481-a32cf645f849.png">

### Type Aliases

- interface와 동일하게 사용

```
type Person = {
  name: string;
  age?: number;
}

type Developer = Person & {
  skills: string[];
}

const person: Person = {
  name: '김코딩',
  age: 27,
}

const myInfo: Developer = {
  name: '성석민',
  skills: [ 'javascript', 'typescript' ]
}

type People = Person[];

const people: People = [person, myInfo]
```

### interface

타입으로 사용되는 interface

- interface에 정의된 변수가 전부 return되어야 한다면 ?

<img width="472" alt="스크린샷 2021-02-17 오전 11 49 22" src="https://user-images.githubusercontent.com/72539723/108149428-2e9a1080-7116-11eb-9360-ad352c61f9b2.png">

- interface에 정의는 했지만 return을 안 하고 싶다면 ?

<img width="473" alt="스크린샷 2021-02-17 오전 11 49 40" src="https://user-images.githubusercontent.com/72539723/108149446-38bc0f00-7116-11eb-8d4f-9e06b388dde5.png">

- interface 상속

```
interface Person {
  name: string;
  age?: number;
}

interface Developer {
  skills: string[];
}

const person extends Person = {
  name: '김코딩',
  age: 27,
}

const myInfo extends Developer{
  name: '성석민',
  skills: [ 'javascript', 'typescript' ]
}
```

### Enum & Literal Type

- Enum

<img width="518" alt="스크린샷 2021-02-17 오후 12 40 08" src="https://user-images.githubusercontent.com/72539723/108152846-46c15e00-711d-11eb-8d75-4cd528d95eb2.png">

- Literal

<img width="522" alt="스크린샷 2021-02-17 오후 12 40 40" src="https://user-images.githubusercontent.com/72539723/108152897-58a30100-711d-11eb-9cc2-894e78b5843d.png">

✔️ Literal Type이 가독성이 좋아 많이 사용한다고 한다!!

### 접근제한자(Access Modifiers)

- public : 어디서든 접근 가능, default
- private : class 내부에서만 접근 가능
- protected : class 내부, 상속받은 자식 class에서 접근 가능

> ## tsc(typescript compiler) 사용

- app.js 파일 생성

```
function info(name: string) {
  console.log(name);
}

name('성석민');
```

- 터미널을 실행 시킨 후 다음과 같은 명령 실행

```
// tsc ? typescript compiler
// 자동으로 app.js 파일을 생성해준다. typescript -> javascript
tsc app.ts
```

- app.ts 파일을 보면 Duplicate function implementation 오류가 발생

  - 이것을 해결하기 위한 방법은 터미널을 실행 시킨 후 다음과 같은 명령 실행

```
tsc --init

-> tsconfig.json 파일이 생성된다.
```

- app.ts에서 코드를 삭제 후 app.js파일에 가보면 코드가 그대로 남아있는 것을 볼 수 있다.

  - 이것을 해결하기 위한 방법은 터미널을 실행 시킨 후 다음과 같은 명령 실행

```
// w = watch (감시한다!!)
tsc -w
```

---
