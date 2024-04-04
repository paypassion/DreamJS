// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특별한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자를 두배값을 다 출력하고 싶음
// 

const printJustNum = function (max) {
  let num= 0;
  while (num <= max) {
    console.log(num)
    ++num;
} 
};

const print2xNum = function (max) {
  let num = 0
  while (num <= max) {
    console.log(num*2);
    num++
} 
};

function iterate(max, action) {
  let result = action(max);
};

iterate(3,print2xNum);

function iterate2(max, action) {
  for (i = 0; i <= max ; i++) {
    action(i)
  }
};

const log = (num) => {console.log(num);};
const DoubleAndLog = (num) => {console.log(num*2);};

setTimeout(() =>{
  console.log('1초 뒤 이 함수가 실행될 거에요');
}, 3000);

