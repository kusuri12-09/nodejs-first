const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end("OK");
})

server.listen(3000, () => console.log("start server"));  

/* callback function
다른 함수의 인수로 호출되어 나중에 실행되는 함수 */