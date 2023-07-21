let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
const dp = [new Array(10).fill(1)];

for (let x = 1; x < input; x++) {
  dp[x] = [1];
  for (let y = 1; y < 10; y++) {
    dp[x][y] = (dp[x - 1][y] + dp[x][y - 1]) % 10007;
  }
}

const result = dp[input - 1].reduce((pre, cur) => pre + cur, 0);
console.log(result % 10007);
 

