//10808.js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("");

// Map 객체 생성
let map = new Map();

// Map 객체에
// key는 i, value는 0인 원소를
// i가 97 ~ 122까지 생성
// 아스키 코드로 97이 a, 122가 z
for(let i = 97; i <= 122; i++){
    map.set(i, 0);
}

// input에 있는 요소 하나하나를 str로 설정하고 반복문을 시작
for (let str of input) {
    // str을 아스키 코드 숫자로 변경
    let ascii = str.charCodeAt();
    
    // 만약 map이 ascii라는 key를 가지고 있다면
    if(map.has(ascii)){
        // key가 ascii인 것에 value를 (원래 본인 값 + 1)으로 바꿔줌
        map.set(ascii, map.get(ascii) + 1);
    }
}

// Map 객체를 배열로 바꿔서 답 출력에 사용
// values() 메서드는 Map 객체의 value만 모아서 보여주도록 함
// Array.from()을 통해 그들을 배열로 전환
let arr = Array.from(map.values());

console.log(arr.join(" ")); 