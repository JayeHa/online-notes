// 함수는 완제품보다는 조립하여 재사용할 수 있도록 만드는 것이 좋다.

class Counter{
  constructor(runEveryFiveTimes){
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase(){
    this.counter++;
    console.log(this.counter);
    if(this.counter%5===0){
      this.callback && this.callback(this.counter);
    }
  } //클래스 내부에서는 함수 선언시 function안써도 된다.
}

function printSomething(num){
  console.log(`Wow! ${num}`);
}

function alertNum(num){
  alert(`alert! ${num}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();