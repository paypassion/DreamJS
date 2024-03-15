// let은 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello'
// text = 'hi' 이렇게 하면 안 됨
// 출력결과
// text = 'hi'
//      ^

// TypeError: Assignment to constant variable.

// 1. 상수 
const MAX_FRUITS = 5; // 대문자로 입력

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
}
// apple = {};
console.log(apple);
apple.name = 'orange'
console.log(apple.name);
apple.display = '🍏'
console.log(apple);




