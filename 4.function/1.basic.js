// 사용예제 1

function sum(a,b) {
  console.log('function');
  return a + b
}
// 호출하지 않으면 실행되지 않는다

//매개변수는 값이 들어가는 자리, 인자는 실제 대입하는 값

const result = sum(1,2); // add 함수는 결과 값을 가지고 있는 상태이지 출력된 상태가 아니므로 어딘가에 할당해서 출력해야지 볼 수 있다.
console.log(result);
console.log(sum(1,2));


// 사용예제 2
function fullName (firstName, lastName) {
  return `${firstName} ${lastName} 🖐`;
}

let lastName = '김';
let firstName = '지수';
console.log(fullName (firstName, lastName));

let lastName2 = '장';
let firstName2 = '시온';
console.log(fullName (firstName2, lastName2));
