const input = [];

const strToNumArr = (str) => str.split(' ').map(Number);

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    const [N, K] = strToNumArr(input.shift());
    const items = input.map((str) => strToNumArr(str));
    //물건 번호 맞추기 위해 맨 앞에 null 넣음
    items.unshift(undefined);

    //maxVSum[n][k]: n번까지의 물건들 중 몇 개를 골라,
    //그 무게 합이 k 이하인 경우들 각각의 가치 합 중 최댓값
    const maxVSum = [];
    for (let i = 0; i <= N; i++) {
      maxVSum.push(Array(K + 1).fill(0));
    }

    for (let n = 1; n <= N; n++) {
      const [weight, value] = items[n];
      for (let k = 0; k <= K; k++) {
        //물건의 무게가 k보다 클 때
        if (k < weight) {
          maxVSum[n][k] = maxVSum[n - 1][k];
        } else {
          maxVSum[n][k] = Math.max(
            maxVSum[n - 1][k], //n번 물건 안 담는 경우
            maxVSum[n - 1][k - weight] + value //n번 물건 담는 경우
          );
        }
      }
    }

    console.log(maxVSum[N][K]);
  });