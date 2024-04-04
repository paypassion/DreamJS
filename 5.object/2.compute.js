const obj = {
  name: '엘리',
  age: 20,
}
// 코딩하는 시점에, 값이 정해져있어서 정적으로 접근이 확정될 때
obj.name;
obj.age;

// 동적으로 속성에(코드를 실행하는 시점에) 접근하고 싶을 때 대괄호 표기법 사용!
function  getVaule(obj, key) {
  return obj[key];
};

console.log(getVaule(obj, 'name'));

function addKey(obj, key, value) {
  return obj[key] = value;
};

addKey(obj, 'job', 'engineer');
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
};

addKey(obj, 'hobby', 'basket-ball')

console.log(getVaule(obj, 'hobby'));

deleteKey(obj, 'hobby');

console.log(getVaule(obj, 'hobby'));
























