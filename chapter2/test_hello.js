import http from "k6/http";

export const options ={
    vus: 100,  // 가상 유저 100명 
    duration: "10s",  // 10초동안 요청
};

export default function() {
    http.get("http://localhost:8000");
}