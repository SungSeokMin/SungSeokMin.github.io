---
title: 'Toy_회원가입 및 로그인'
layout: category-project
categories:
  - project
  - Toy
toc: true
---

> ## 사용한 모듈

![module](https://user-images.githubusercontent.com/72539723/118116692-8b5f4b80-b425-11eb-9453-3bcc598a4256.png)

> ## node.js 및 express.js 설치

- node : Chrome V8 엔진으로 빌드된 JavaScript 런타임
- nvm(node version manager) : 여러 개의 nodejs를 설치하고 사용할 버전을 쉽게 전활할 수 있도록 도와주는 역할

### 터미널 실행 후

```
nvm 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

최신 버전 설치
nvm install node

특정 버전 설치
nvm install 12.18.3

노드 사용
nvm use 12.18.3

내 컴퓨터 안에 설치되어 있는 노드 버전 목록
nvm ls
```

### express 설치 후 서버 오픈

- express : Node.js를 위한 빠르고 간편한 웹 프레임워크

- express 설치
  - npm install express --save

```
// index.js

const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`running on ${port}`))
```

> ## MongoDB 연결

1. https://www.mongodb.com 접속 후 회원가입
2. Create a New Cluster
3. Cluster를 만들었다면 SANDBOX 왼쪽 부분에 CONNECT 클릭
4. UserName과 Password 입력 후 Create Database User<br>❗️나중에 DB연결을 위해 name과 password 기억❗️
5. Connect your application 클릭 후 mongodb+srv로 시작하는 문자열 복사해두기
6. VSCode로 이동 후 mongoose 설치<br>npm install moongose --save

7. mongoose 모듈을 불러온 후 connect 하기
8. 연결이 잘 되었나 확인

```
const mongoose = require('mongoose');

❗️5번에서 복사한 문자열 중 <password> 부분 삭제 후 4번에서 작성한 password 적어주기❗️

mongoose.connect('5번에서 복사한 문자열 붙여넣기', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
}).then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));
```

### 연결 확인

```
// package.json

=> scripts 부분에 start 명시
"scripts": {
    "start": "node index.js",
  },
```

```
npm run start

=> MongoDB Connected... 문구 확인
```

> ## MongoDB Model & Schema

최상위 루트에 models 디렉토리 생성 후 하위에 User.js 파일 생성

```
// User.js

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50, /* 문자열 최대 길이 */,
  },
  email: {
    type: String,
    trim: true /* email의 공백을 허용하지 않는다. */,
  },
  password: {
    type: String,
    minlength: 5, /* 문자열 최소 길이 */
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    /* 일반유저, 관리자 등을 파악하기 위한 model */
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    // token 유효기간
    type: Number,
  },
});

/* schema를 model로 감싼 후 exports */
const User = mongoose.model('User', userSchema);

module.exports = { User };

```

> ## BodyParser

- BodyParser : Client의 request의 body 데이터를 분석해 주는 역할

❌ express 4.16버전 이후로는 bodyParser가 지원되지 않는다.❌

```
설치
npm install body-parser --save

4.16버전 이전

// application/x-www-form-urlencoded
app.use(bodyParser.urlecoded({extended: true}));

// application/json
app.use(bodyParser.json());

4.16버전 이후

// application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// application/json
app.use(express.json());

```

> ## 회원가입 기능

http method 중 post를 이용해서 Route처리

```
// index.js

const { User } = require('./models/User');

app.post('/register', (req, res) => {
  // User model을 가져온 후 인스턴스화
  const user = new User(req.body);

  user.save((err, userInfo) => {
    /* 만약 user에 정보를 저장하는데 에러가 나면 success를 false로 응답하고 그렇지 않은 경우에는 true로 응답한다 */
    if(err) return res.json({success: false, err});
    return res.status(200).json({success: true});
  })
})
```

> ## bcrypto를 이용한 비밀번호 암호화

💡 코드를 보기 앞서 신경써야 할 부분

- mongoose의 method 중 <pre('save')> : DB에 저장하기 전 (.save()) 실행 되는 함수
- this
- saltRounds
- next();

```
// models/User.js

const bcrypt = require('bcrypt);
const saltRounds = 10; => salt의 자릿수를 지정

userSchema.pre('save', function (next) {
  /* index.js파일에서 const user = new User(req.body); 를 통해 인스턴스화를 했기 때문에 this는 req.body의 정보로 들어온 사용자가 된다. */
  let user = this;

  // isModified는 mongoose의 method
  if (user.isModified('password')) {
    // 비밀번호 암호화 시키기
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next(); => index.js의 save하는 함수로 이동시킨다.
      });
    });
  }
});
```

> ## Login 기능 구현

- jsonwebtoken 설치
  - npm install jsonwebtoken --save
- cookie-parser 설치
  - npm install cookie-parser

### 순서

1. '/login' endpoint로 route 처리
2. client로 부터 넘어온 data 중 email이 DB에 있는지 없는지 확인
3. 있다면 비밀번호가 일치하는 지 확인
4. 2,3 조건이 만족한다면 Token 생성후 응답

```
// index.js
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.post('/login', (req, res) => {
  // 1. 요청된 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '제공된 이메일에 해당하는 유저가 없습니다.',
      });
    }
    // 2. 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({ loginSuccess: false, message: '비밀번호가 틀렸습니다.' });
      }
      // 3. 1,2번 조건이 만족 한다면 token 생성
      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err);

        res.cookie('x_auth', user.token).status(200).json({loginSuccess: true, userId: user._id})
      });
    });
  });
});
```

```
// User.js
const jwt = require('jsonwebtoken');

=> comparePassword
userSchema.methods.comparePassword = function(plainPassword, callback) {
  bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
    if(err) return callback(err);
    return callback(null, isMatch); => isMatch의 값은 boolean
  })
}

=> generateToken
userSchema.methods.generateToken = function (cb) {
  let user = this;

  // MongoDB에서 생성된 _id는 string이 아니므로 toHexString() 메소드를 사용해서 형변환을 해줘야한다.
  const token = jwt.sign(user._id.toHexString(), 'secretToken');

  user.token = token;

  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};
```

> ## Auth 기능 구현

### 순서

1. middleware 폴더 생성 후 하위 auth.js 파일 생성
2. findByToken을 statics method를 이용해 함수 작성
3. User 모델 require 후 auth 함수 작성
4. index.js에서 auth route 처리

```
// auth.js

const { User } = require('../models/User');

let auth = (req, res, next) => {
  // client cookie에서 토큰을 가져온다.
  let token = req.cookies.x_auth;

  // 토큰을 복호화 한 후 유저를 찾는다.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
```

```
// User.js

userSchema.statics.findByToken = function (token, cb) {
  let user = this;

  // 토큰을 복호화 한다.
  jwt.verify(token, 'secretToken', function (err, decoded) {
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};
```

```
// index.js

app.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});
```

> ## Logout 기능 구현

### 순서

1. DB에 저장한 token 값을 삭제하면 auth middleware가 동작을 안 하기 때문에 로그아웃이 된다.

```
// index.js

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});
```

[Git](https://github.com/SungSeokMin/boiler-plate_signIn_signUp)

출처 : 인프런(따라하며 배우는 노드, 리액트 시리즈) - John Ahn
