/*
* 삼항연산자 
*/
const array = [];
let text = ''; 

text = array.length === 0 
  ? '배열이 비어있습니다.' 
  : '배열이 비어있지 않습니다.';
console.log(text);

const condition1 = false;
const condition2 = false;
const value = condition1 
  ? 'wow'
  : condition2 
    ? 'good'
    : 'no' ;

console.log(value);

/*
* truthy and falsy 
*/
// 5가지 falsy 한 값, 그 외 truthy 한 값 
console.log(!undefined); // true
console.log(!null); // true
console.log(!0); // true
console.log(!''); // true
console.log(!NaN); // true

/*
* 단축 평가 논리 계산법 Short-circuit evaluation 
* 언제써 ? truth or falsy 한 값에 따라 결과 나와야할때
*/
// && 
// 앞에 오는게 true 이면 뒤에거가 리턴됨
// 앞에 오는게 false이면 무조건 false 
console.log(undefined && 'hello'); // undefined
console.log(null && 'hello'); // null
console.log(NaN && 'hello'); // NaN
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0 
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1

// || 
// 앞에 오는게 true 이면 앞에꺼 리턴됨 
// 앞에 오는게 false 이면 뒤에꺼 리턴됨 
console.log(undefined || 'hello'); // hello
console.log(null || 'hello'); // hello
console.log(NaN || 'hello'); // hello
console.log('' || 'hello'); // hello
console.log(0 || 'hello'); // hello
console.log(1 || 'hello'); // 1
console.log(1 || 1); // 1

const namelessDog = {
  name: ''
}

function getName(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다. 

/*
* 함수의 기본 파라미터 
*/
  // 파라미터 기본값 지정 
function clulaterCircleArea(r = 1) {
  return Math.PI * r * r;
}
const area = clulaterCircleArea(5);
console.log(area);

// 화살표 함수로 변형 
const clulaterCircleArea2 = (r = 1) => Math.PI * r * r;
const area2 = clulaterCircleArea2(5);
console.log(area2);

/*
* 조건문 더 스마트하게 쓰기 
*/
// 값 포함 여부 체크 
function isAnimal(text) {
  const animals = ['고양이', '개', '거북이', '너구리'];
  return animals.includes(text); 
}
// 화살표 함수 
const isAnimal = (text) => ['고양이', '개', '거북이', '너구리'].includes(text); 

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false

// 파라미터에 따라 다른 결과 값이 나와야할때 객체 사용 
function getSound(animal) {
  const sounds = {
    개: '멍멍',
    고양이: '야옹',
    참새: '짹짹',
    비둘기: '구구'
  }
  return sounds[animal] || 'no';
}

console.log(getSound('개')); // 멍멍
console.log(getSound('고양이')); // 야옹 
console.log(getSound('돼지')); // no 

// 객체 사용하자! 
function makeSound(animal) {
  const tasks = {
    개: () => {
      console.log('멍멍');
    },
    고양이: () => {
      console.log('야옹');
    }
  }
  const task = tasks[animal];
  if (!task) {
    console.log('...?');
    return
  }
  task();
}

makeSound('개'); // 멍멍
makeSound('고양이'); // 야옹 
makeSound('돼지'); // ...?

/*
* 비구조화 할당 (구조 분해)
*/
const object = { a: 1};
const {a, b = 2} = object;
console.log(a); // 1
console.log(b); // 2 

// 비구조할당 앞 - 기존이름, 뒤 - 새로운이름 
const animal = {
  name: '멍멍이',
  type: '개'
}
//const nickname = animal.name;
const { name: nickname } = animal;
console.log(nickname); // 멍멍이 
console.log(animal);

// 배열 비구조화 할당 
const array = [1];
const [one, two = 2] = array;

console.log(one); // 1
console.log(two); // 2 

// 깊은 object 안에 있는 값 가져오려할때 
const deepObject = {
  state: {
    information: {
      name: 'jhy',
      language: ['korean', 'react', 'php']
    }
  },
  value: 5
}
const {name, language} = deepObject.state.information;
const {value} = deepObject;
console.log(name); //jhy
console.log(language); //["korean", "react", "php"]

// 깊은 object 안에 있는 값 가져오려할때2  
const deepObject = {
  state: {
    information: {
      name: 'jhy',
      language: ['korean', 'react', 'php']
    }
  },
  value: 5
}

const {
  state: {
    information: {
      name, language
    }
  },
  value
} = deepObject;

const extracted = {
  name,
  language,
  value
};
console.log(extracted);
/*
name: "jhy"
language: Array[3]
value: 5
*/ 

/*
* ES6 spread (...)  
* 기존 배열 건드리지 않음.
*/
const slime = {
  name: '슬라임'
};
console.log(slime);
// Object {name: "슬라임"}

const cuteSlime ={
  ... slime, 
  attribute: 'cute' 
}
console.log(cuteSlime);
// Object {name: "슬라임", attribute: "cute"}

const purpleSlime = {
  ... cuteSlime, 
  color: 'purple'
}
console.log(purpleSlime);
// Object {name: "슬라임", attribute: "cute", color: "purple"}

const greenSlime = {
  ... purpleSlime,
  color: 'green'
}
console.log(greenSlime);
// Object {name: "슬라임", attribute: "cute", color: "green"}
// => 먼저 선언된 값에 뒤에 선언된 값으로 덮어씀.

/*
* ES6 rest 
* 앞 인자값 제외한 나머지 object 모음  
* 맨 마지막에 와야한다! 
*/
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...rest } = purpleCuteSlime;
console.log(color); // purple
console.log(rest); // color를 제외한 객체들 name, attribute
// Object {name: "슬라임", attribute: "cute"]

const { attribute, ...slime} = rest;
console.log(slime);  // Object {name: "슬라임"]

// CASE2 
const numbers = [0, 1, 2, 3, 4, 5];
const [one, two, ...rest] = numbers;
console.log(one); //0 첫번째 
console.log(two); //1 두번째 
console.log(rest); //[2, 3, 4, 5] 앞에꺼 제외하고 다 

/*
* ES6 rest 
* 함수 파라미터에서의 rest 
*/
function sum (...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6));  // 36 

/*
* ES6 spread  
* 함수 파라미터에서의 spread 
*/
// 파라미터 - 함수에서 받아오는 값 x,y   
function subtract(x, y) {
  return x-y;
}
// 인자값 - 함수 사용할때 쓰는 값 1,2 
const result = subtract(1, 2);

function sum (...rest) { // spread 파라미터 값에서 사용 
  return rest.reduce((acc, current) => acc + current, 0);
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sum(...numbers)); // spread 인자값에서 사용  

/*
* spread, rest 를 사용한 예시 
*/
// 배열 중 가장 큰 값 리턴 
function max(...numbers) {
  return numbers.reduce(
    // acc 이 current 보다 크면 결과값을 current 로 하고
    // 그렇지 않으면 acc 가 결과값
    (acc, current) => (current > acc ? current : acc),
    numbers[0]
  );
}
const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result); // 10 

/*
* Scope
* 변수, 함수 선언시 어디서부터 어디까지 유효한지 범위 
* Global Scope - 전역
* Function Scope - 특정함수내부 
* Block Scope - if, for, switch {} 안에 내에서 
*/
const value = 'hello'; //global scope

function myFunction() {
  console.log('myFunction : ' );
  console.log(value); //hello 
}

function otherFunction() {
  console.log('otherFunction : ');
  const value = 'bye';
  console.log(value); //bye function scope 
}

myFunction();
otherFunction();

console.log('global scope : ');
console.log(value); //hello 

// CASE 2 scope 범위 체크 
// var 가 아닌 const 를 쓰는 이유  
// var function scope
// const, let block scope 
const value = 'hello'; //global scope

function myFunction() {
  const value = 'bye';
  if (true) {
    const value = 'world';
    console.log('block scope : ');
    console.log(value); //world 
  }
  console.log('function scope : ');
  console.log(value); //bye   var 로선언시 if 절 밖에 있던 이부분도 world 로 변경됨.
}

myFunction();
console.log('global scope');
console.log(value); //hello 
 
/*
* Scope 의 이해 - hoisting 호이스팅  
* js에서 끌어올려서 작동하는 것 ex) 함수호출 
* 왠만하면 피해라! why? 코드 이해하기 어려움, 유지보수하기 힘듦  
*/
// 함수 선언전에 호출해도 결과값 노출됨 
myFunction(); // hello world! 
function myFunction() {
  console.log('hello world!');
}

// 변수 호이스팅 선언 전에 출력했는데 error 아닌 undefined 노출 
// but const, let 은 호이스팅이 일어나지 않는다. 따라서 error 노출 
console.log(numbers);
var numbers = 2;