// 단항연산자 Unary Operators
// + (양)
// - (음)
// ! (부정)

let a = 5;
a= -a; // -1 * 5
console.log(a);
a = -a;
console.log(-a);

a = +a;
console.log(a);
a = -a; // -5
a = +a; // +(-5)
console.log(a);
// +,- 를 변환할 때 쓴다.


let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);
// 참 거짓을 변환할 때 !를 쓴다.

// +이나 -를 앞에 붙이면 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인할 수 있다.
console.clear;

console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN

console.log(!!1); // ! 부정연산자
// !! 값을 boolean 타입으로 변환함!






