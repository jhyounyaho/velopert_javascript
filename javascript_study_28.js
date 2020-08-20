/*
* html과 javascript 연동 
* count 예제 만들기 
*/
// DOM - js 객체 
 const number = document.getElementById('number');
 const increase = document.getElementById('increase');
 const decrease = document.getElementById('decrease');

 console.log(number.innerText); // 0
 console.log(increase.offsetTop); // top 값 
 console.log(decrease.id); // id 값 

 // dom.이벤트 종류 
increase.onclick = () => {
  // parseInt 문자열을 숫자로, 두번째인자값 10 - 10진수로 표현 
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
  console.log('increase'); 
}

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
  console.log('decrease'); 
}

// CASE2 querySelectorAll 사용해서 DOM 접근 
// DOM - js 객체 
const number = document.getElementById('number');
const buttons = document.querySelectorAll('button');
const [increase, decrease] = buttons;

 // dom.이벤트 종류 
increase.onclick = () => {
  // parseInt 문자열을 숫자로, 두번째인자값 10 - 10진수로 표현 
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
  console.log('increase'); 
}

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
  console.log('decrease'); 
}

/*
* 모달 만들기! ex) 화면 가린 alert 창같은거 만들기 !   
*/
/* 
    index.html
    <!DOCTYPE html>
    <html>

    <head>
        <title>Parcel Sandbox</title>
        <meta charset="UTF-8" />
    </head>

    <body>
        <h1>안녕하세요!</h1>
        <p>냐옹냐옹냐옹</p>
        <button id="open">모달 열기</button>
        <div class="modal-wrapper" style="display:none">
            <div class="modal">
                <div class="modal-title">안녕하세요</div>
                <p>모달 내용 노출 영역</p>
                <div class="close-wrapper">
                    <button id="close">닫기</button>
                </div>
            </div>
        </div>
        <script src="src/index.js">
        </script>
    </body>
    </html>
*/
/*
    src/styles.css 
    body {
    font-family: sans-serif;
    }

    .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center; 
    justify-content: center; 
    }

    .modal {
    background: white;
    padding: 24px 16px;
    border-radius: 4px;
    width: 320px;
    }

    .modal p {
    font-size: 16px; 
    }

    .modal-title{
    font-size: 24px;
    font-weight: bold;
    }

    .close-wrapper {
    text-align: right;
    }
*/
// src/index.js 
import './styles.css';

const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.querySelector('.modal-wrapper');

open.onclick = () => {
  modal.style.display = "flex";
}

close.onclick = () => {
  modal.style.display = "none";
}