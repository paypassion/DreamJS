// 문자열 타입
let string = '안녕하세요';
string = `안녕`;
console.log(string);

// 특수 문자 출력하는 법
string = "'안녕!'" // 작은따옴표나 큰따옴표를 출력하고 싶을 때는 반대되는 따옴표를 바깥에 달면 된다.
console.log("'안녕!'");

string = '안녕!\n엘리야!\t\t내 이름은\\\u16C7 ' 
console.log(string);

// 템플릿 리터럴 (Template Literal) ``
let id = '엘리'
let greetings = "'안녕!," + id + "🖐\n 즐거운 하루 보내요!'"
console.log(greetings);

greetings = `'안녕, ${id}🖐 
즐거운 하루 보내요!' `
console.log(greetings);

// ${} 어떤 변수가 가진 데이터나 문자열을 보고 싶을 때 쓰는 코드