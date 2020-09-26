/*
  new Promise
  ES6 javascript 비동기 처리 
  promise 개체는 비동기 작업의 완료 or 실패와 그 결과 값을 나타냄

  const myPromise = new Promise((resolve, reject) => {
    resolve(); // 성공
    reject(); //실패
  })

  myPromise()
  .then(() => {
    // promise resolve 결과
  })
  .catch((error) => {
    // promise reject 결과 
  })

  resolve시에는 then
  reject시에는 catch 
  => 따라서 동시에 실행되지 않음 
*/

const findTodos = () =>
  new Promise((resolve, reject) => {
    this.storageTodos = this.parsingTodos();
    resolve(this.storageTodos); // 성공
  });

const makeTodos = () => {
  todoService
    .findTodoos()
    .then((todos) => {
      // then : Promise의 resolve에 들어간 값 받음
      todos.map((todo) => {
        return new Todo(todo.title, todo.content);
      });
    })
    .catch((error) => {
      // catch : reject 된 경우
      console.log("error::\n", error);
    });
};
