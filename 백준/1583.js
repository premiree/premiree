const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let n;
rl.on('line', (line) => {
    input.push(line);
    if(input.length - 1 === n){
        solution(input);
        rl.close();
    }
}).on('close', () => process.exit());

function solution(input) {
    n = Number(input[0]);
    let pillars = input.slice(1).map(v => v.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);

    pillars.unshift([0, 200]);
    pillars.push([200, 200]);

    let answer = 200;

    for(let i = 1; i <= n+1; i++) {
        let width = pillars[i][0] - pillars[i-1][0];
        let height = Math.min(pillars[i][1], pillars[i-1][1]);
        answer = Math.min(answer, width, height);
    }

    console.log(answer);
}
