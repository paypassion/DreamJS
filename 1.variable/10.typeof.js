// typeof: 데이터 타입을 확인하는 연산자
// 값을 타입 문자열로 변환

let variable;
console.log(typeof variable);

variable = ''
console.log(typeof variable);

variable = 123; // <- 할당된 값에 따라 타입이 결정된다.
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = [];
variable;
console.log(typeof variable);

variable = function () {}
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');


