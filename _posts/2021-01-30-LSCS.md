---
title: 'LSCS-연속된 부분 배열의 합의 최대값'
layout: category-algorithm
categories: algorithm
toc: true
---

## LSCS

### 문제설명

> 정수를 요소로 갖는 배열 <br>
> 주어진 배열의 연속된 부분 배열의 합을 구한다.<br>
> 이 중 가장 큰 값을 리턴해야 한다.<br>
> 배열의 모든 요소가 음수인 경우도 있다.

```
let output = LSCS([1, 2, 3]);
console.log(output); // --> 6

output = LSCS([1, 2, 3, -4]);
console.log(output); // --> 6

LSCS([1, 2, 3, -4, 5]);
console.log(output); // --> 7

LSCS([10, -11, 11]);
console.log(output); // --> 11
```

<hr>

## 수도코드

1. 연속된 배열의 합을 저장할 변수 생성
2. 연속된 부분 배열의 합을 저장할 변수 생성<br>
   2.1 Number.MIN_SAFE_INTEGER = -900719925474099<br>
3. 배열의 길이만큼 반복 ... for loop
4. 각각의 요소를 1번 변수에 저장 +=
5. 만약 1번 변수의 합이 최대값 보다 클 경우 2번 변수에 저장
6. 연속된 부분 배열의 합이 0보다 작을 경우 0으로 초기화를 해도 된다.
7. 2번 변수를 return 한다.

## 풀이 코드

```
const LSCS = function(arr) {
  let result = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for(let i = 0; i < arr.length; i++) {
    // 부분 합을 저장
    result += arr[i]

    // 최대값을 저장
    if(result > max) {
      max = result;
    }

    // 부분 합이 음수 인 경우 0으로 초기화
    if(result < 0) {
      result = 0;
    }
  }
  return max;
}
```

<hr>

간단한 문제라고 생각했지만 부분 합의 최대값 이라는 부분에서 어떻게 풀어가야할 지 생각이 많았다.
