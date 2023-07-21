var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString();
var num = Number(inputs);
var tmp = num;
var remainder;
var answer = [];
while(tmp/-2 !== 0){
    remainder = tmp%-2;
    if(remainder == -1 || remainder == 1){
        tmp = Math.floor(tmp/-2)+1;
        answer.push(1);
    }else if(remainder === 0){
        tmp = Math.floor(tmp/-2);
        answer.push(0);
    }
}
console.log(answer.length === 0 ? 0 : answer.reverse().join(''));