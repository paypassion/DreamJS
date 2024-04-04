function add(a,b) {
  console.log(a);
  console.log(b);
  return a + b;
}
const sum = add;
// sum(1,2); // add(1,2); 둘 다 같다. sum이라는 변수에는 add를 참조하는 메모리주소가 들어있으므로 결론적으로 같은 값을 출력한다.
// console.log(sum(1,2));
console.log(add(1,2));
