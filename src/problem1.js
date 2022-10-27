


function finalScore(array) {
  const result = [];   // 각 페이지별 더한 숫자, 곱한 숫자
  let score;     // 각 사람의 점수

  let a;
  let b;
  let c;

  let i;
  let sum;
  let product;

  if (array[1] - array[0] !== 1)
    return -1;
  for (i = 0; i < 2; i++) {
    a = Math.floor(array[i] / 100); // 한자릿수, 두자릿수는 0
    b = Math.floor(array[i] % 100 / 10)   // 한자릿수는 0
    c = array[i] % 10

    sum = a + b + c
    if (a !== 0) {
      product = a * b * c
    }
    else {
      if (b !== 0) {
        product = b * c
      }
      else {
        product = c
      }
    }

    result[i] = sum > product ? sum : product;

  }

  score = result[0] > result[1] ? result[0] : result[1]
  return score;
}

function problem1(pobi, crong) {
  var answer;

  let pobiScore = finalScore(pobi);
  let crongScore = finalScore(crong);

  if (pobiScore === -1 || crongScore === -1)
    return -1;
  if (pobiScore === crongScore)
    answer = 0;
  else
    answer = pobiScore > crongScore ? 1 : 2;
  return answer;
}

console.log(problem1([97, 98], [197, 198]))
console.log(problem1([131, 132], [211, 212]))
console.log(problem1([99, 102], [211, 212]))

module.exports = problem1;
