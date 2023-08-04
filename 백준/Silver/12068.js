const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let T = parseInt(input.shift());
    for (let i = 0; i < T; i++) {
        let [Np, Ne, Nt] = input.shift().split(' ').map(Number);
        let pedals = input.shift().split(' ').map(Number);
        let extra = input.shift().split(' ').map(Number);
        let tires = input.shift().split(' ').map(Number);
        let M = parseInt(input.shift());
        let targets = input.splice(0, M).map(line => line.split(' ').map(Number));

        console.log(`Case #${i+1}:`);
        for (let [P, Q] of targets) {
            let possible = false;
            for (let a of pedals) {
                for (let b of extra) {
                    for (let c of extra) {
                        if (b === c) continue;
                        for (let d of tires) {
                            if (a * d * Q === P * b * c) {
                                possible = true;
                                break;
                            }
                        }
                        if (possible) break;
                    }
                    if (possible) break;
                }
                if (possible) break;
            }
            console.log(possible ? "Yes" : "No");
        }
    }
    process.exit();
});
