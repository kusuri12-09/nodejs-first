const express = require("express");
const url = require("url");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Refactor Router with Express")
});

app.get("/", (_, res) => res.end("HOME"));  // app.get(경로, 함수)
app.get("/user", user);
app.get("/feed", feed);


function user(req, res) {
    const userInfo = url.parse(req.url, true).query;
    res.end(`[user] name : ${userInfo.name}, age: ${userInfo.age}`);
};

function feed(req, res) {
    res.end(`
        <ul>
          <li>picture1</li>
          <li>picture2</li>
          <li>picture3</li>
        </ul>`);
}