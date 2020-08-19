/*
* let, const  ES2015 
* 이젠 개발시 var를 사용하지 않도록 하자 
*/
let hello = 1; // 변수 선언  
const world = 2; // 상수 선언 

/* 
* var을 사용하면 안되는 예시 
*/
const a = 1;
var b = 1;

if (a + 1 === 2) {
  const a = 3;
  var b = 3;
  console.log('if 문 안의 const a 값 ' + a); // 3
  console.log('if 문 안의 var b 값 ' + b); // 3
}

console.log('if 문 밖의 const a 값 ' + a); // 1
console.log('if 문 밖의 var b 값 ' + b); // 3
// why? var 는 function-scoped, let/const 는 block-scoped  

/*
* null 값 없음
* undefined 값 선언되지 않음
*/
let apple = null;
let orange = undefined;

/*
* 연산자 - 산술 연산자, 대입연산자 
*/
let nike = 6;
a += 6;
a -= 6;
a *= 5;
a /= 5; 

/* 
* 연산순서 
* NOT ! 
* AND &&
* OR ||
*/ 

/*
* 비교 연산자 ==, === 
* 개발시 타입까지 체크하는 === 을 사용하도록 하자 
*/ 
const a = 1;
const b = '1';
const equals = a == b; // true 
const equals2 = a === b; // false

/*
* Template Literal 
*/ 
const name = '혜윤';
console.log('hello ' + name + ' !') ;
console.log(`hello ${name} !`) ;

/*
* ES6 화살표 함수 Arrow Function 
* this 알 수 없음. 
*/
function add (a, b) {
    return a + b;
}

const add = (a, b) => {
  return a + b;
}

// 리턴만 있을 경우 이렇게 표현 할 수 있다. 
const add = (a, b) => a + b; 

/*
* 객체 Object
*/
const ironMan = {
  name: '토니스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티브 로져스',
  actor: '크리스 어반스',
  alias: '캡틴 아메리카'
}

function print(hero) {
  const text = `${hero.name}(${hero.alias}) 역할은 맡은 배우 ${hero.actor} 입니다`; 
  console.log(text);
}

print(ironMan);
// 토니스타크(아이언맨) 역할은 맡은 배우 로버트 다우니 주니어 입니다 
print(captainAmerica);
// 스티브 로져스(캡틴 아메리카) 역할은 맡은 배우 크리스 어반스 입니다 

/*
* ES6 객체 비구조화 할당 
*/
function print(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역할은 맡은 배우 ${actor} 입니다`; 
  console.log(text);
}

function print2({alias, name, actor}) {
  const text = `${alias}(${name}) 역할은 맡은 배우 ${actor} 입니다`; 
  console.log(text);
}

/*
* 객체 안에 함수 넣기
*/
const dog = {
  name: '멍멍이',
  sound: '멍멍',
  say: function say() {
    console.log(this.sound);
  }
}

dog.say(); // 멍멍 

/*
* getter, setter 함수
*/
const dog = {
  _name: '멍멍이',
  get name() {
    console.log('_name을 조회합니다.');
    return this._name;
  },
  set name(value) {
    console.log('이름이 바뀝니다.' + value);
    this._name = value;
  }
}
console.log(dog.name); 
// _name을 조회합니다. 
// 멍멍이 
dog.name = '뭉뭉이';
console.log(dog.name);
// 이름이 바뀝니다.뭉뭉이 
// _name을 조회합니다. 
// 뭉뭉이 

/*
* 객체의 무결성을 보장하기 위해 객체에 직접 접근 X, Getter, Setter 로 접근하도록 함 
* getter 함수 - 본 필드의 값을 숨긴 채 내부에서 가공된 값을 꺼낼 수 있음.
* setter 함수 - 전달 받은 값을 내부에서 가공하여 필드에 넣어줌
*/
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  }
}
console.log(numbers.sum);
numbers.a = 5;
console.log(numbers.sum);

numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);

/*
* push 배열에 데이터 추가
*/
const objects = [
  { name : '멍멍이' },
  { name : '야옹이' }
];

objects.push({
  name: '꽥꽥이'
});

/*
* 반복문 - while 
* 조건이 까다로울 때 사용함 true, false 
*/
let i = 0;
let isFun = false;

while (!isFun) {
  console.log(i);
  i++;
  if (i === 10) {
    isFun = true;
  }
}

/*
* 반복문 - for ... of
* 배열 반복문 쓸때 사용함  
*/
const numbers = [10, 20, 30, 40, 50];

for (let numbers of numbers) {
  console.log(numbers);
}
// 내가 주로 쓰는 스타일
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

/*
* 객체 관련 함수 keys, values, entries 
*/ 
const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
}
console.log(Object.keys(doggy));   // name, sound, age
console.log(Object.values(doggy)); // 멍멍이, 멍멍, 2
console.log(Object.entries(doggy)); // 배열로 반환 

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}
// name: 멍멍이 sound: 멍멍 age: 2 

/*
* 배열 내장 함수 forEach 
*/
const superheros = [
  '아이언맨',
  '캡틴아메리카',
  '토르',
  '헐크'
];

function print(hero) {
  console.log(hero);
}
superheros.forEach(print);

// 간단하게 
superheros.forEach(function(hero){
  console.log(hero);
});

// 더 간단하게 화살표 함수
superheros.forEach((hero) => {
  console.log(hero);
});

/*
* 배열 내장 함수 map
*/
const array = [1, 2, 3, 4, 5]; 
const squared = [];

for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

array.forEach(n => {
  squared.push(n * n);
})

const square = n => n * n;
const squared = array.map(square);

const squared = array.map(n => n * n);

console.log(squared); // 동일한 결과 노출됨

/*
* 배열 내장 함수 indexOf
*/
const superheros = ['아이언맨', '캡틴아메리카', '토르', '헐크'];
const index = superheros.indexOf('토르');
console.log(index); // 2 

/*
* 배열 내장 함수 findindexOf, find, filter  
*/
const todos = [
  {
    id: 1,
    text: 'js 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  }, 
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  },
];
// findIndex 조건 만족하는 index 반환 
const index = todos.findIndex(todo => todo.id === 3);
console.log(index);  

// find 조건 만족하는 값 반환 
const index2 = todos.find(todo => todo.id === 3);
console.log(index2);  

// filter 기존 배열 건드리지 않고, '새로운 배열' 생성
const tasksNotDone = todos.filter(todo => !todo.done); 
console.log(tasksNotDone); 

/*
* 배열 내장 함수 splice     
* 기존 배열 건드려서 수정함 
* 배열을 잘라낼 때 사용함 
*/
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 2);

console.log(spliced); // [30, 40]
console.log(numbers); // [10, 20]

/*
* 배열 내장 함수 slice      
* 기존 배열 건드리지 않음 
* 배열을 잘라낼 때 사용함 
*/
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2);

console.log(sliced); // [10, 20]

/*
* 배열 내장함수 - shift 
* shift 기존 함수 수정 앞에서부터 빠짐
* 기존 배열 변경됨 
*/
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value); // 10 
console.log(numbers); // [20. 30. 40]

/*
* 배열 내장함수 - pop 
* pop 기존 함수 수정 뒤에서부터 빠짐
* 기존 배열 변경됨 
*/
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value); // 40 
console.log(numbers); // [10, 20. 30]

/*
* 배열 내장함수 - unshift 
* unshift 배열 앞에다 데이터 넣어줌 
* 기존 배열 변경됨 
*/
const numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers); // [5, 10, 20, 30, 40]

/*
* 배열 내장함수 - concat 
* 기존 배열 변경 X 
*/
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
console.log(concated); // [1, 2, 3, 4, 5];

// ES6 spread 연산자 
const spread = [...arr1, ...arr2];
console.log(spread); // [1, 2, 3, 4, 5];

/*
* 배열 내장함수 - join 
*/
const array = [ 1, 2, 3, 4, 5];
console.log(array.join());      // 1,2,3,4,5  
console.log(array.join(' '));   // 1 2 3 4 5 
console.log(array.join(', '));  // 1, 2, 3, 4, 5 

/*
* 배열 내장함수 - reduce
* 배열이 주어지고 연산을 해야할때용사용
*/
const numbers = [1, 2, 3, 4, 5];

// forEach 로 배열의 합계 구하는 법 
let sum = 0;
numbers.forEach(n => sum += n);
console.log(sum); // 15

// reduce 로 배열의 합계 구하는 법 
// accumulator 누적값, current 원소값 , 0 - accumulator 값의 초깃값 설정   
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0)
console.log(sum); //15

// reduce 로 배열의 평균 구하는 법 
// accumulator 누적값, current 원소값 , index 배열 index, array 배열, 0 - accumulator 값의 초깃값 설정   
const average = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length; 
  } 
  return accumulator + current;
}, 0)
console.log(average); //15

// 각 배열에 몇개 인지 알고 싶을때 
const alphabets = ['a', 'a', 'a','b', 'c', 'c', 'd', 'e']; 
const counts = alphabets.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {}); // {} 비어있는 객체를 초깃값으로 설정함 
console.log(counts);
/*
Object {a: 3, b: 1, c: 2, d: 1, e: 1}
a: 3
b: 1
c: 2
d: 1
e: 1
*/

/*
* prototype 과 class - 객체 생성자 
*/
// 객체생성자 Animal
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say(); // 멍멍
cat.say(); // 야옹 

/*
* prototype 과 class - 객체 생성자 상속하기  
*/
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
}

function Dog (name, sound) {
  // 첫번째 인자값 this, 나머지 Animal의 파라미터값 
  Animal.call(this, '개', name, sound);
}
Dog.prototype = Animal.prototype;

function Cat (name, sound) {
  Animal.call(this, '고양이', name, sound);
}
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();

/*
* prototype 과 class - ES6 class 등장! 
*/
class Animal {
  // 생성자 
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super('개', name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super('고양이', name, sound);
  }
}

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');
const cat2 = new Cat('야오오잉', '야오옹옹');

dog.say();
cat.say();
cat2.say();

/*
* Food class 만들어보기!
*/
class Food {
  constructor(name) {
    this.name = name;
    this.brands = []; 
  }
  addBrand(brand) {
    this.brands.push(brand)
  }
  print() {
    console.log(`${this.name} 을/를 파는 음식점들`);
    console.log(this.brands.join(', '));
  }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노');
pizza.print();

const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('교촌치킨');
chicken.print();