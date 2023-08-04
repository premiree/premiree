const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let T;
rl.on('line', (line) => {
    input.push(line);
    if (input.length === 2 * Number(input[0].split(' ')[1]) + 1){
        solution(input);
        rl.close();
    }
}).on('close', () => process.exit());

function solution(input) {
    T = Number(input[0]);
    let index = 1;
    for (let t = 0; t < T; t++) {
        let [M, N] = input[index++].split(' ').map(Number);
        let memo = Array(1 << M).fill(-1);
        let algo = Array(N).fill(0);
        for (let i = 0; i < N; i++) {
            let L = input[index++].split(' ').map(Number);
            for (let j of L) {
                algo[i] |= 1 << (j - 1);
            }
        }
        function dp(bit) {
            if (bit == (1 << M) - 1) return 0;
            if (memo[bit] != -1) return memo[bit];
            let ret = 21;
            for (let i = 0; i < N; i++) {
                if (bit | algo[i] != bit) {
                    ret = Math.min(ret, dp(bit | algo[i]) + 1);
                }
            }
            memo[bit] = ret;
            return ret;
        }
        dp(0);
        let result = [];
        function solve(bit, cnt) {
            if (bit == (1 << M) - 1) return;
            for (let i = 0; i < N; i++) {
                if (bit | algo[i] != bit && memo[bit] == cnt - 1) {
                    result.push(String.fromCharCode('A'.charCodeAt(0) + i));
                    solve(bit | algo[i], cnt - 1);
                    return;
                }
            }
        }
        solve(0, dp(0));
        console.log(`Data Set ${t+1}: ${result.join(' ')}\n`);
    }
}
