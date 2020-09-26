/*
  javascript LocalStorage 
  - 데이터를 사용자 로컬에 보존하는 방식
  - 데이터를 저장, 덮어쓰기, 삭제 등 조작 가능
  - javascript로 조작

  쿠키와 차이점
  - 유효 기간이 없고 영구적으로 사용 가능 
  - 5MB까지 사용 가능 (쿠키는 4KB까지)
  - 필요할 때 언제든 사용 가능 (쿠키는 서버 접속시에 자동 송신)

  LocalStorage 기본 구성
  - key 와 value을 하나의 세트로 저장
  - 값은 반드시 문자열로 저장됨
  - 도메인과 브라우저별로 저장 
*/

let storageTodos = localStorage.todos;

if (!storageTodos) {
  // undefined 데이터가 없을 경우 todos의 초깃값 설정
  /*
    LocalStorage 데이터 추가 방법
    localStorage.setItem("todos", JSON.stringify([]));
    localStorage.todos = JSON.stringify([]);
    localStorage['todos'] = JSON.stringify([]);
  */
  localStorage.setItem("todos", JSON.stringify([]));
} else {
  // 데이터가 있을 경우 todos의 파싱한 값 사용
  storageTodos = parsingTodos();
}

// localStorage 값 파싱
parsingTodos(() =>
  localStorage.todos ? JSON.parse(localStorage.todos) : null
);
