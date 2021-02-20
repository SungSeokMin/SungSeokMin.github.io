---
title: 'React-TypeScript'
layout: category-frontend
categories:
  - frontend
  - react-typescript
toc: true
---

> ## React에서 TypeScript 사용하기 + Redux

❗️ 시작하기 전에 ❗️<br />
TypeScript를 사용하면서 어떤 건 .ts이고 어떤 건 .tsx인지 궁금했다.<br />
Component를 작성 시 .tsx를 사용하고 그 외에는 .ts를 사용

### TodoList

#### 파일 구조

<img width="265" alt="스크린샷 2021-02-20 오후 2 44 50" src="https://user-images.githubusercontent.com/72539723/108585206-893ba280-738a-11eb-909b-9a32937333b6.png">

### Redux Setting

#### index.ts

✔️ 궁금해

- export \* from 'path' ?
  - from 뒤에 오는 path에서 export된 것들을 가져와서 내보내준다는 의미!

```
export {default} from './reducer';
export * from './actions';
export * from './types';
```

#### actions.ts

✔️ 궁금해

- typesafe-actions ?

  - action, reducer를 보다 편한히 사용하기 위한 라이브러리

- 타입을 초기화 할 때 as const를 넣는 이유 ?
  - action 함수를 생성할 때 생성될 함수의 타입을 명확히 하기 위해서 !
  - as const를 작성한 경우
    - <img width="302" alt="스크린샷 2021-02-20 오후 2 58 43" src="https://user-images.githubusercontent.com/72539723/108585488-22b78400-738c-11eb-9fa2-5985f60e38d8.png">
  - as const를 작성하지 않은 경우
    - <img width="305" alt="스크린샷 2021-02-20 오후 2 58 15" src="https://user-images.githubusercontent.com/72539723/108585462-129fa480-738c-11eb-9079-01b6f4b8c9aa.png"> <br />

```
import { deprecated } from 'typesafe-actions';
const { createStandardAction } = deprecated;

export const ADD_TODO = 'todos/ADD_TODO' as const;
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

// 게시글 번호를 위해 변수 생성
let nextId = 1;

// 기존 방식의 action 함수 생성
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text,
  },
});

❗️ 조심 해야 하는 부분 ❗️
매개변수로 받아오는 값이랑 payload르 이용해 내보내주는 값이 다른 경우에는 createStandardAction을 사용하는 것이 아니라 createAction 메소드를 사용해야 한다.

// typesafe-actions 라이브러리를 이용한 action 함수 생성
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();
```

#### types.ts

TypeScript를 사용하기 때문에 타입을 지정 해주기 위한 파일

✔️ 궁금해

- ActionType ?

  - 기존의 방식대로 작성을 하면 aciont 함수를 구현한 수 만큼 ReturnType을 이용해 다 적어줘야 했지만 한 번에 하는 방법이 있다
  - ActionType을 사용한 경우 (둘 다 같은 결과가 나온다.)
    - <img width="623" alt="스크린샷 2021-02-20 오후 3 19 21" src="https://user-images.githubusercontent.com/72539723/108585976-02d58f80-738f-11eb-94a7-1dd0f4fc9530.png">
  - ActionType을 사용하지 않은 경우
    - <img width="630" alt="스크린샷 2021-02-20 오후 3 18 41" src="https://user-images.githubusercontent.com/72539723/108585966-edf8fc00-738e-11eb-8c5c-dd819b6fafb2.png">

- Todo[] ?
  - Todo라는 타입을 배열로 하겠다는 의미 !

```
import {ActionType} from 'typesafe-actions;
import * as actions from './actions';

export type TodoAction = ActionType<typeof actions>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodoState = Todo[];
```

#### reducer.ts

✔️ 궁금해

- createReducer ?
  - 보다 간편한 문법으로 reducer를 작성하기 위해 사용한 메소드
- ☀️ 어떤 문법을 사용하는 자기 마음 ☀️
- 기존 redux reducer 방식
  - <img width="623" alt="스크린샷 2021-02-20 오후 3 41 14" src="https://user-images.githubusercontent.com/72539723/108586459-13d3d000-7392-11eb-9185-5848c4247c0e.png">

```
import { createReducer } from 'typesafe-actions;
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';
import { TodoAction, TodoState } from './types';

// types에서 지정한 타입을 initalState의 타입으로 설정
const initialState: TodoState = [];

const todos = createReducer<TodoState, TodoAction>(initialState, {
  [ADD_TODO] : (state, action) =>
    state.concat({
      ...action.payload,
      done: false
    }),
  [TOGGLE_TODO]: (state, action) =>
    state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done} : todo)),
  [REMOVE_TODO]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
})

export default todos;
```

#### modules > index.js

rootReducer 생성

✔️ 궁금해

- combineReducers ?
  - 여러개의 reducer를 combine(결합)시키기 위해 사용되는 메소드
- 왜 export를 두 번 하지 ?
  - combine한 rootReducer와 그 reducer의 Type을 내보낸다!

```
import { combineReducers } from 'redux';
import todos from './todos';

const rootReducer = combineReducers({
  todos,
})

export default rootReducer;
export RootState = ReturnType<typeof rootReducer>
```

<hr />
## Compoent Setting

#### App.tsx

```
import React from 'react';
import TodoApp from './containers/TodoApp';


function App() {
  return <TodoApp />
}

export default App;
```

#### index.tsx

열심히 Redux를 만들었으니 store를 생성 해야겠죠 !?

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modlues';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

#### TodoApp.tsx

전체적인 메소드를 관리하면서 자식 Compoenent에 props로 메소드를 내려주는 역할

```
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import { Rootstate } from '../modlues';
import { addTodo, toggleTodo, removeTodo } from '../modlues/todos/actions';

function TodoApp() {
  // useSelector를 이용해 store에 있는 todos에 접근한다.
  const todos = useSelector((state: Rootstate) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  }

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  }

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  }

  return (
    <>
      <TodoInsert onInsert={onInsert}>
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}>
    </>
  )
}

export default TodoApp;
```

### TodoInsert

할 일을 추가할 수 있도록 구현한 Component

```
import React, { FormEvent, useState } from 'react';

// 부모 Component로부터 받는 props의 타입을 정해준다.
type todoInsertProps = {
  onInsert: (text: string) => void;
}

function TodoInsert({ onInsert }: todoInserProps) {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} placeholder="할 일을 입력하세요.">
      <button type="submit">등록하기</button>
    </form>
  )
}

export default TodoInsert;
```

#### TodoList.tsx

전체적인 게시판을 관리하는 Component

```
import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

function TodoList({todos, onToggle, onRemove}: TodoListProps) {
  if(todos.length === 0) return <p>등록된 항목이 없습니다.</p>
  return (
    <ul>
      {todos.map(todo) => (<TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove}>)}
    </ul>
  )
}

export default TodoList;
```

#### TodoItem.tsx

할 일을 하나하나 관리하는 Component

```
import React, { CSSProperties } from 'react';
import { Todo } from '../modlues/todos';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;

  function TodoItem({todo, onToggle, onRemove}: TodoItemProps) {
    const handleToggle = () => onToggle(todo.id);
    const handleRemove = () => onRemove(todo.id);

    const textStyle: CSSProperties = {
      textDecoration: todo.done ? 'line-through' : 'none',
    }

    const removeStyle: CSSProperties = {
      color: 'red',
      marginLeft: 8,
    }

    return (
      <li>
        <span onClick={handleToggle} style={textStyle}>
          {todo.text}
        </span>
        <span onClick={handleRemove} style={removeStyle}>
          X
        </span>
      </li>
    )
  }
}

export default TodoItem;
```

벨로퍼티님의 강의를 보고 나름 정리를 해보았다.<br />
TypeScript 문법이 익숙하지 않았지만 계속 따라 쳐보고 생각하다 보니깐
어느 순간 손이 자동으로 움직이기 시작했고, 확실히 처음 공부를 한 것 보다
문법에 대한 이해도나 습득력이 늘었다고 해야하나? 다른 언어를 배우더라도 겁 내지 않고
할 수 있겠다 라는 생각을 가지고 다가갈 수 있을 것 같다.
