const express = require("express");
const app = express();

let posts = [];

app.use(express.json());  // application/json 형식의 요청 본문 데이터를 자바스크립트 객체로 파싱함
app.use(express.urlencoded({ extended: true }));  // application/x-www-form-urlencoded 형식의 요청 본문 데이터를 파싱

app.get("/", (req, res) => {
    res.json(posts);
});

app.post("/posts", (req, res) => {
    const { title, name, text } = req.body;
    posts.push({ 
        id: posts.length + 1, 
        title, 
        name, 
        text, 
        createdDt: Date() 
    });
    res.json({ title, name, text });
});

app.delete("/posts/:id", (req, res) => {
    const id = req.params.id;
    const filteredPosts = posts.filter((post) => post.id !== +id);
    const isLengthChanged = posts.length !== filteredPosts.length;
    posts = filteredPosts;
    if (isLengthChanged) {
        res.json("OK");
        return;
    }
    res.json("NOT CHANGED");
});

app.listen(3000, () => {
    console.log("Welcome Posts Start!")
});