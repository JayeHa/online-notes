console.log(this); // 📞Window {window:Window, ...}

function simpleFunc(){
   console.log(this);
}
simpleFunc(); // 📞Window {window:Window, ...}  ==> window.simpleFunc(); 와 동일

console.clear(); // ==========================================

class Counter {
   count = 0;
   increase = function () {
      console.log(this);
   };
   
   increase2 = () => {     // 오브젝트와 연결하고 싶다면 2) arrow func 사용💡
      console.log(this);
   }
}
const counter = new Counter();
counter.increase(); // 📞Counter{count:0, increase: f}

const caller = counter.increase;
// const caller = counter.increase.bind(counter); // 오브젝트와 연결하고 싶다면 1) bind()함수를 이용해서 묶어줘야함 💡

caller(); // 📞undefined
// counter의 increase포인터를 caller라는 변수로 할당했기 때문에 this의 정보를 잃어버리게 됨
// let과 const로 선언한 변수는 윈도우에 등록되어져 있지 않으므로 이 caller를 호출하는 것은
// 윈도우가 아니라 그 어떤 오브젝트도 아니기 떄문에 undefined이 호출한 것과 마찬가지

// 📎 참고
// 자바스크립트에서 함수를 정의하면 기본적으로 정의된 함수는 글로벌 객체에서 접근이 가능합니다.
// 우리가 선언한 "함수"는 윈도우 객체에 기본적으로 등록이 되고요
// 하지만 const나 let이라는 키워드로 "변수"를 선언하게 되면 이 선언된 변수는 윈도우에, 글로벌 객체 안에 등록되지 않습니다.
// 예외사항: var키워드 ==> 그래서 var는 호이스팅 문제 뿐만아니라 재정의되는 문제 등이 있어서 사용 지양하는 것임⛔


class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // 📞Bob{run: f} ==> run이라는 함수는 bob이 불렀기 떄문

// 자바스크립트에서 this는 요술램프 지니🧞
// JS에서 this란 부르는 사람의 문맥에 따라서 변경될 수 있으므로 따로 바인드를 호출해야 하거나
// 아니면 클래스 내부에 바인딩을 하고 싶은 함수가 있다면, 또는 this에 접근하는 함수가 있다면
// arrow function을 쓰는 것이 더 좋을 수 있어요.
// 나중에 this때문에 오류가 발생하는 일은 없겠죠.