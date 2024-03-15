let b; // 선언문
b = 2; // 표현식, 할당문

// 해당 문이 값을 산출해내는지 알아 보는 법 - 대입하기
//let a = let b; -> 선언문은 값을 선출하는게 아니기 때문에 에러가 난다.
let a = (b = 2); // b값이 할당 된 다음에 b가 평가가 되고, b에 들어있는 2가 할당된다. 값 할당이 가능하므로 표현식이자 할당문이다.
console.log(a);
