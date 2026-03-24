const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {  // get 요청 실행
    res.set({"Content-Type": "text/html; charset=utf-8"});
    res.end("Hello, Express");
});

app.listen(port, () => {
    console.log(`Start Server: use ${port}`);
});