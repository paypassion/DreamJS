// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식) {}
// 실행순서:
// 1. 변수선언문
// 2. 조건식이 값이 참이면 {} 코드 블럭을 실행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될 때 까지 2번과 3번을 반복한다.

for (let i = 0; i < 5; i ++) {
  console.log(i);
}

for (let i = 0; i < 5; i ++) {
  for(let j = 0; j < 5; j++) {
  console.log(i,j);
  }
}
// j가 4가 되는 시점에 안쪽 코드 블록이 끝나고 바깥쪽 코드 블록이 실행된다. 그리고 다시 안쪽블록은 처음부터 시작되므로 초기화 값부터 시작한다.

// 무한루프
// for(;;) {
// }

// 조건이 언젠가는 거짓이 될 수 있도록 코딩하라.

// 반복문 제어: continue, break;
for(let i = 0; i < 20; i++) {
  if(i === 10) {
    continue
    console.log("i가 드디어 10이 되었다!");
  }
  console.log(i);
}

for(let i = 0; i < 20; i++) {
  if(i === 10) {
    console.log("i가 드디어 10이 되었다!");
    
  }
  console.log(i);
}
