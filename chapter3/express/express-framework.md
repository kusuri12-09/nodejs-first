## Express Framework를 사용하는 이유?

Node.js 기본 모듈만으로도 서버 구현은 가능

하지만 실제 서비스에서는 다음과 같은 기능이 많이 필요함.

| 기능 | 설명 |
| --- | --- |
| 라우팅 | URL과 함수 연결 |
정적 파일 서비스 | CSS, JS, 이미지 제공
템플릿 엔진 | 동적 HTML 생성
요청 데이터 처리 | body, params, query 처리
응답 데이터 처리 | JSON 응답, 파일 응답
쿠키/세션 | 로그인 상태 관리
리다이렉트 | 다른 페이지로 이동
에러 페이지 | 오류 처리
미들웨어 | 공통 전처리/후처리

Express Framework를 이용하여 빠르게 개발

## Express 설치
```shell
npm install express
```