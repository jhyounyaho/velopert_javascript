/*
* javascript 에서 비동기 처리 다루기 
* 비동기 처리의 이해 
* 동기적 (Synchronous)
* - 작업을 하는 동안 다른 작업들은 대기중 
*
* 비동기적 (Asynchronous)
* - 동시에 여러가지 작업 처리 함 
* 
* 비동기 처리 언제해 ?
* - Ajax Web API 요청
* - 암호화/복호화
* - 파일 읽기 
* - 작업 예약 (몇 초 후에 해야한다! setTimeout 사용)
*/

/*
* setTimeout, cllback 함수 사용하여 비동기처리하기 
*/
function work(callback) {
  // 비동기 
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i ++) {
  
    }
    const end = Date.now();
    console.log(`소요시간 ${end - start} ms`);
    callback(end-start); 
  }, 0);  // 0ms 후 실행하겠다 실제론 4ms 브라우저가 지정한 최소 ms 
}
console.log('작업 시작');
work((ms) => {
  console.log('작업이 끝났어요');
  console.log(ms + 'ms 걸렸어요');
});
console.log('다음 작업');
/*
작업 시작 
다음 작업 
소요시간 1146 ms 
작업이 끝났어요 
1146ms 걸렸어요 
*/

/*
* ES6 Promise
* 비동기 작업을 더 편안하게 하기위해 ES6 도입된 기능   
* ES6 전 사용하던 함수 - callback 
*/
// callback 지옥 
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}
increaseAndPrint(0, n => {
  increaseAndPrint(n, n=> {
    increaseAndPrint(n, n=> {
      increaseAndPrint(n, n=> {
        increaseAndPrint(n, n=> {
          console.log('작업 끝!');
        })
      })
    })
  })
});
/*
1
2
3
4
5
작업 끝! 
*/

// promise 를 사용해서 비동기처리하기 
const myPromise = new Promise((resolve, reject) => {
  // 성공시 호출 resolve, 실패시 호출 reject 
  setTimeout(() => {
    reject('reject 실패!');
    resolve('resolve 성공!');
  }, 1000);
});

myPromise.then(result => {
  // promise 작업 성공 후(resolve) 실행할 내용을 then 에 정의 
  console.log(result);
}).catch((e) => {
  // promise 작업 후 실패한(reject) 내용을 catch 에 정의 
  console.log(e);
})

// CASE2 promise 를 사용하면 여러개 사용해도 코드의 깊이가 깊어지지 않는다! 
// 단점 error 잡을때 어디서 발생한건지 어려움 then 으로 이뤄줘서 분기 나누기 번거로움, 값을 전달하기 번거로움
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1; 
      if (value === 5) {
        const error = new Error();
        error.name = 'valueIsFiveError';
        reject(error);
        return; 
      }
      console.log(value);
      resolve(value);
    }, 1000);
  })
}

increaseAndPrint(0).then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch((e) => {
  console.error(e);
});

/*
* 비동기 async, await 
*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(1000); 
  const error = new Error();
  throw error;
}

async function proccess() {
  // error 를 잡아야할때 try, catch 문 작성 
  try {
    await makeError();
  } catch(e) {
    console.error(e);
  }

  console.log('안녕하세요');
  // promise 앞에 await 작성 
  // await 쓰면 .then 작성안해도 됨.
  await sleep(1000); 
  console.log('반갑습니다');
  return true;
  
}

proccess();

/*
* 비동기 Promise.all , Promise.race 
*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async() => {
  await sleep(1000);
  return '멍멍이';
}

const getRabbit = async() => {
  await sleep(500);
  return '토끼';
}

const getCat = async() => {
  await sleep(3000);
  return '고양이';
}

async function proccess() {
  // 배열에 promise 들 등록함, 각 promise 들의 결과값이 result 에 담김 
  // promise.all은 하나라도 error 나면 다 error 남 -> try, catch 로 잡아줌 
  // 총 3000ms 걸림 getCat 이 3000 이니까 
  try {
    // 비구조화 할당 
    const [dog, rabbit, cat] = await Promise.all([getDog(), getRabbit(), getCat()]);
    console.log(dog); // 멍멍이 
    console.log(rabbit); // 토끼
    console.log(cat); // 고양이 
  } catch(e) {
    console.error(e);
  }
  
  // Promise.race 
  const first = await Promise.race([getDog(), getRabbit(), getCat()]);
  console.log(first); //토끼 promise 중 가장 빨리 끝나는 결과물 노출됨. 
}

proccess();



















