// 생성자 함수를 이용하면
// 특정한 템플릿에 맞게, 정해진 틀 안에 맞게 
// 원하는 객체를 만들 수 있다.

// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name} : 🍎`);
//   },
// }

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name} : 🍊`);
//   },
// }

// 생성자 함수

function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}` );
  }
  // return this; // 생략가능
};

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
console.log(apple.display);

