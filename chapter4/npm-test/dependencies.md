npm (node package manager)

## 설치한 패키지 확인
```shell
npm ls

# 설치한 의존성이 의존하는 패키지까지 확인
npm ls --depth=1
```

## 패키지 삭제
```shell
npm uninstall [패키지]
npm rm
```

## 설치
```shell
npm install [패키지]
npm install [패키지] -D
```

## 업데이트
```shell
npm update [-g] [패키지...]
```

## ci 명령
package.json을 참고하여 의존성 패키지 설치
```shell
npm ci
```

## npm 스크립트 파일
```json
{
  "name": "test-scripts",
  "version": "1.0.0",
  "scripts": {
    "hello": "echo 'hello Node.js'"
  }
}
```
- 실행
```shell
npm run hello
```
- 실행 전 / 후 실행될 스크립트 지정 (pre / post)
```json
"scripts": {
  "prehello": "echo 'PRE HELLP'",
  "hello": "echo 'hello Node.js'",
  "posthello": "echo 'POST HELLP'",
}
```
- `test` / `stop` / `start` / `restart`: run 없이 실행 가능
```shell
npm test
npm stop
npm start
npm restart
```

## NPX (node package execute)
- prettier 사용
```shell
npm install prettier
npx prettier index.js # 포매팅
npx prettier -w index.js  # index.js에 결과 반영
```