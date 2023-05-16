// 'fs' 모듈을 불러와서 사용할 준비를 합니다.
var fs = require('fs');

// '/dev/stdin'으로부터 입력을 읽어온 후, 문자열로 변환하고 공백을 제거합니다.
var input = fs.readFileSync('/dev/stdin').toString().trim();

// 입력된 문자열의 길이를 출력합니다.
console.log(input.length);