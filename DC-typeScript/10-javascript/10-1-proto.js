
   const x = {};
   const y = {};
   // console.log(x);            // ==> 콘솔창에서 오브젝트를 열면 __proto__라는 것이 들어있음. 
   // console.log(y);            //    JS에서 모든 오브젝트는 이 Object라는 프로토를 상속함
   // console.log(x.toString()); // 그래서 우리가 아무것도 쓰지 않았음에도 toString() 이용할 수 있음
   // console.log(x.__proto__ === y.__proto__); // true (x와 y는 동일한 오브젝트의 프로토를 상속하고 있기 떄문)

   const array = [];
   // console.log(array);        // ==> Array라는 프로토(length(), push() 등 가능)를 가리키고있고, 이 프로토는 또 Object라는 프로토도 가지고 있음(상속)

// ===============================================================

   function CoffeeMachine(beans){
      this.beans = beans;
      // 📌 Instance member level : 만들어지는 인스턴스마다 포함이 되는 함수
      // this.makeCoffee = (shots) => {
      //    console.log('making...☕');
      // }
   }

   // 📌 Prototype member level : 한 번만 정의하고 싶을 때
   CoffeeMachine.prototype.makeCoffee = shots => {
      console.log('making..☕');
   }

   const machine1 = new CoffeeMachine(10);
   const machine2 = new CoffeeMachine(20);
   console.log(machine1);
   console.log(machine2);

// ===============================================================

   function LatteMachine(milk) {
      this.milk = milk;
   }
   LatteMachine.prototype = Object.create(CoffeeMachine.prototype); // 프로토타입을 이용한 상속구현

   const latteMachine = new LatteMachine(123);
   console.log(latteMachine);
   latteMachine.makeCoffee(); // CoffeeMachine을 상속힌 후 LatteMachine에서도 makeCoffee함수 이용가능

   // 📌 프로토타입이란? 
   // - 자바스크립트에서 객체지향 프로그래밍 상속을 하기 위해서 쓰이는 아이다.
   // - 코드를 재사용하기 위해서 만들어진 아이다.