// 표준 입력으로부터 입력값을 읽어와서, 문자열로 변환하고 양쪽 공백을 제거한 뒤 줄바꿈 문자('\n')로 나누어 배열로 저장합니다.
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 요소는 입력값의 개수를 의미하므로 len 변수에 따로 저장하고, input 배열에서 제거합니다.
const len = input.shift();

// 결과를 저장할 배열을 선언합니다.
const result = [];

// 입력값의 개수(len)만큼 반복합니다.
for (let i = 0; i < len; i++) {
    // 괄호의 쌍을 확인하기 위한 변수 cnt를 0으로 초기화합니다.
    let cnt = 0;

    // input[i]는 i번째 입력값을 의미하며, 반복문을 통해 한 문자씩 확인합니다.
    for (let s of input[i]) {
        // "("이면 cnt를 1 증가시키고, ")"이면 cnt를 1 감소시킵니다.
        cnt += s === "(" ? 1 : -1;

        // cnt가 음수가 되면 올바른 괄호 쌍이 아니므로 반복문을 종료합니다.
        if (cnt < 0) break;
    }

    // 반복문을 마치고 나왔을 때, cnt가 0이면 모든 괄호 쌍이 올바르게 맞아떨어지는 경우이므로 "YES"를, 그렇지 않으면 "NO"를 결과 배열에 추가합니다.
    result.push(cnt === 0 ? 'YES' : 'NO');
}

// 결과 배열을 줄바꿈 문자('\n')로 이어서 출력합니다.
console.log(result.join('\n'));
