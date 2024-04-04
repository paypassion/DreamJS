// 퀴즈!

let num = 2;
// num의 숫자가 짝수이면 엄지척, 홀수라면 역따봉을 출력하도록
// if문 활용
// ternary 활용

num = 3

if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
};

// ternary

num % 2 === 0 ? console.log('👍'): console.log('👎');
// or

let emoji = num % 2 === 0 ? '👍' : '👎'
console.log(emoji);

// 이렇게 더 간결하게 쓸 수 있다.
