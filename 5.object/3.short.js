const x = 0;
const y = 0;
const coordinate = {x, y} // {x: x, y: y};
console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age
  } //name이라는 키에 name이라는 매개변수가 가리키고 있는 값
};

makeObj('greeting', 'hey')
makeObj('food', 'egg')

