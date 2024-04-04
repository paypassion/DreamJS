// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩입니다.
// 상태변경이 필요한 경우에는, 새로운 상태(오브젝트, 값)을 만들어서 변환해야 한다 ✨
// 원시값은 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 

function display(num) {
  num = 5; // ❌
  console.log(num);
};
const value = 4; // 원시데이터는 값이 그대로 전달되거나 복사된다.
display(value);
console.log(value);

function displayObject(obj) {
  obj.name = 'bob' // ❌❌❌❌❌ 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
  console.log(obj);
};

const ellie = {name: 'Ellie'};
displayObject(ellie)
console.log(ellie);

function changeName(obj) { // 이름부터 변경하는 느낌을 주도록 이름 짓기!
  return {...obj, name: 'Bob'}; // 반환할 때는 새로운 오브젝트 만들기!
};