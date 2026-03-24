## 호이스팅이란?

선언이 코드 아래에 있어도, 자바스크립트가 마치 위로 끌어올린 것처럼 동작하는 현상

```javascript
hello();

function hello() {
    console.log("Hello, World!\n");
}
```
- 함수 선언문은 호이스팅 됨

```javascript
hello();

const hello= () => {
    console.log("Hello, World!\n");
};
```
- const 함수 표현식은 호이스팅되지 않음

| 선언 방식 | 호이스팅 여부 | 선언 전 사용 |
| --- | --- | --- |
function 선언문 | 됨 | 가능
var | 됨 | 가능(값은 undefined)
let | 됨 | 불가
const | 됨 | 불가
함수 표현식(const/let에 저장) | 변수 규칙을 따름 | 불가