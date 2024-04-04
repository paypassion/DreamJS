// 함수 선언문 function name () {}
// 함수 표현식 const name = functinon () {}
// 함수 표현식은 함수 이름을 지을 수는 있지만 외부에서 접근할 수 없으므로 할당된 변수의 이름을 사용하라.

let add = function (a,b) {
  return a + b;
};
console.log(add(1,2));

// 화살표 함수 const name = () => { }
// return 말고 아무것도 없을때만 가능하다.

add = (a,b) =>  a + b;
console.log(add(1,2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Experssions )
(function run() {
  console.log('🍊');
}) ();

