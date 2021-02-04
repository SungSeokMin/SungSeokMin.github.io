---
title: 'HTML/CSS'
layout: category-frontend
categories:
  - frontend
  - html
  - css
toc: true
---

> ## 기본적인 HTML 문법

### Inline vs Block

대표적으로 span, div

- Inline은 크기의 영역만큼 차지하고 Block은 한 줄을 차지한다.
  ![Inline VS Block](/img/div_span.png)

### ul > li

목록을 나타낼 때 사용하는 목록태그

- 앞의 동그라미를 없애고 싶으면 list-style: none 속성을 주면 된다.
  ![ul_li](/img/ul_li.png)

### li > input

input태그는 Inline 속성이므로 ul > li 와 같은 목록 태그로 감싸줘도 된다.

![li_input](/img/li_input.png)

### li > label > input

label태그 안에 input태그를 넣어주게 되면 for속성을 사용하지 않아도 된다.
![li_label_input](/img/li_label_input.png)

### table

⭐️ TIP : border-collapse: collapse를 사용하면 표의 테두리와 셀의 테두리 사이의 간격을 사라지게 할 수 있다.<br>

- th: 테이블의 헤더, 즉 카테고리를 작성
- tr: 한 행을 열어주는 역할
- td: 테이블의 데이터, 즉 내용을 작성<br>
  ![table](/img/table.png)

### a

⭐️ TIP : blank : 새 창 또는 탭에서 문서를 연다.

```
<a href="https://sungseokmin.github.io">git blog</a>
```

### img

⭐️ TIP : 링크의 밑줄을 없애고 싶다면 ?? text-decoration: none;

```
<img src="img.jpg" alt="사진의 내용">
```

---

> ### 유용한 CSS 속성

```
글자 가운데 정렬
text-align: center;

배경 이미지 넣기
background-image: url('주소');

줄 높이 정하기
line-heignt: 다양하게 줄 수 있다. normal, length, number, px, % ...

POSITION
- relative : 지금 현재의 위치를 기준
- absolute : html문서를 기준으로 right: 0; bottom:0; 을 하면 오른쪽 하단에 위치
- fixed : 고정, 스크롤을 올리거나 내려도 항상 같은 위치에 존재

⭐️ modal, 로그인 창 같은 것을 가운데로 오게 하고 싶다면 ??
position: absolute; top: 50%; left: 50%; transform: translate(-50%. -50%);

테두리 둥굴게
border-radius : px, % 둘 다 가능

~계속해서 추가 예정~
```
