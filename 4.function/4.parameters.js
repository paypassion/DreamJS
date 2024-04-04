// 매개변수의 기본값은 무조건 undefinded이다.
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments라는 객체에 저장됨.
// 매개변수 기본값을 Default Parameters라고 한다. a = 1, b = 1
// 인자를 입력하면 그 인자 값을 입력하여 작동한다.
function add(a =1,b =1) {
  console.log(a);
  console.log(b);
  console.log(arguments[0]);
  console.log(arguments[1]);
  return a + b;
};
add(); // 이 경우 a,b 값은?


// Rest 매개변수 Rest Parameters
function sum(a,b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
};

sum(1,2,3,33,4,5555)