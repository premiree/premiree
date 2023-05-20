const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map((item) => Number(item));

const N = input[0];
const K = input[1];

// 인원 배정
let queue = [...new Array(N)].map((item, index) => item = index + 1);

let count = 1;

let ans = [];

while(queue.length > 0){
    let shiftedPeople = queue.shift();
    
    if(count % K === 0){
        ans.push(shiftedPeople);
    } else{
        queue.push(shiftedPeople);
    }
    
    count++;
}

const answer = ans.join(", ");
console.log(`<${answer}>`);
