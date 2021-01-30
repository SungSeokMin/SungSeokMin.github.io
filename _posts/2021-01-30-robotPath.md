---
title: '최소시간으로 길찾기-완전탐색'
layout: category-algorithm
categories: algorithm
toc: true
---

## Robot Path

### 문제설명

> 2차원 배열(room), 현재 지점(src), 도착 지점(dst) <br>
> 1은 장애물, 0은 이동 가능한 통로를 의미한다. <br>
> 로봇은 지도 위를 일분에 한 칸씩 상하좌우로 이동 할 수 있다. <br>
> 로봇의 위치와 목표 지점이 함께 주어질 경우
> 로봇이 목표 지점까지 도달하는 데 걸리는 최소 시간을 리턴

```
let room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];
let src = [4, 2];
let dst = [2, 2];
let output = robotPath(room, src, dst);
console.log(output); // --> 8
```

<hr>

## 수도코드

1. recursion 함수 생성 ... (세로의 길이, 가로의 길이, 현재 지점, 최소시간=1)
2. 배열의 범위가 벗어난 경우 return
3. room의 [row, col]이 0인 경우 와 최소시간 보다 큰 경우 <br>
   3.1 room의 [row, col]을 최소시간(step)으로 초기화 한다.
4. 그것이 아니면 return <br>
   4.1 그 이유 ? 장애물이 이미 1이거나, 최소 시간으로 통과 가능한 경우니깐 !
5. 상하좌우로 재귀한다.
6. 완전탐색이 끝나면 도착지점의 row, col을 구조분해 하고
7. room의 row, col 자리의 값 = 최소시간에서 1을 빼준다. <br>
   7.1 그 이유? 방문하지 않기 위해 로봇의 위치를 1로 초기화 하면<br>
   7.2 바로 옆 통로는 1이 증가한다.

## 풀이 코드

```
const robotPath = function (room, src, dst) {
  const recursion = (M, N, path, step) => {
    // 현재 점을 저장
    const [row, col] = path;

    // 배열의 범위를 벗어난 경우
    if(row < 0 || row >= M || col < 0 || col >= N) {
      return;
    }

    // 이동할 수 있는 경우
    if(room[row][col] === 0 || room[row][col] > step) {
      room[row][col] = step;
    } else {
      return;
    }

    // 상
    recursion(M, N, [row+1, col], step + 1);
    // 하
    recursion(M, N, [row-1, col], step + 1);
    // 좌
    recursion(M, N, [row, col-1], step + 1);
    // 우
    recursion(M, N, [row, col+1], step + 1);
  }
  // 세로, 가로, 현재지점, 최소시간
  recursion(room.length, room[0].length, src, 1);

  const [row, col] = dst;
  return room[row][col] -1;
}
```

<hr>

문제파악과 해결하는 부분에서 시간이 엄청 오래걸렸다.
DFS, BFS에 대한 개념을 더 익히는 것이 필요한 것 같다.
