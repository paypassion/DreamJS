// 조건문 Conditonal Statement
// if (조건) {실행코드}
// if (조건) {실행코드} else {}
// if (조건1) {실행코드} else if (조건2) {} else {}
// 여기서 조건이란 true나 false로 평가될 수 있는 표현식

let fruit = 'd';
if(fruit === 'apple') {
  console.log('🍎');  
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('😍');
}

if (2 > 1) {
  console.log('출력되면 안됨!');
}

// if () 안의 값이 출력이 되지 않는 경우 생각해보기
// if 값의 t/f에 따라서 {} 안의 내용을 실행할지 않을지를 제어할 수 있다.
