/*
  addEventListener 
  이벤트 등록 
  이벤트가 대상에 전달될 때마다 호출할 함수를 설정

  target.addEventListener(type, listener[, options]);
  type      반응할 이벤트 유형
  listener  콜백함수로 이벤트가 발생되면 실행
  options   useCapture라 불리는 boolean값, 이벤트 버블링이나 캡쳐링을 사용할것인지 나타냄  
*/

// DOMcontentLoaded 초기 html 문서를 완전히 불러오고 분석했을 때 발생
// 스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않습니다.
document.addEventListener("DOMContentLoaded", () => {
  /*페이지 로드시 실행 할 내용 */
});

// contextmenu 마우스 오른쪽 단추로 클릭해 메뉴 열 때 발생
wrap.addEventListener("contextmenu", (e) => {});

// mouseup 마우스 버튼을 눌렀다 뗐을 때 발생
document.documentElement.addEventListener(
  "mouseup",
  this.stopResize.bind(this),
  false
);

// mousedown 마우스 버튼을 눌렀을때 발생
this.dragger.addEventListener("mousedown", this.initDrag.bind(this), false);

// mousemove 마우스 커서를 움직일때 발생
document.documentElement.addEventListener(
  "mousemove",
  this.doResize.bind(this),
  false
);

// dragover 요소나 텍스트 블록을 적합한 드롭 대상 위로 지나갈 때 발생한다. (매 수백 밀리초마다 발생한다.)
this.holder.addEventListener("dragover", this.dragover.bind(this), false);

// dragenter 드래그한 요소나 텍스트 블록을 적합한 드롭 대상위에 올라갔을때 발생
this.holder.addEventListener("dragenter", this.dragenter.bind(this), false);

// drop 요소나 텍스트 블록을 적합한 드롭 대상에 드롭했을 때 발생
this.holder.addEventListener("drop", this.drop.bind(this), false);

//dragstart 요소나 텍스트 블록을 드래그하기 시작했을 때 발생
this.drag_area.addEventListener("dragstart", this.dragStart.bind(this), false);

// dragend 드래그 끝냈을때 발생 (마우스 버튼을 떼거나 ESC 키를 누를 때)
this.drag_area.addEventListener("dragend", this.dragEnd.bind(this), false);
