interface Employee{
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(){
    console.log(`part time!!`);
  }
  workPartTime(){}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee) : Employee {
  employee.pay();
  return employee;
}

// 제네릭 조건✨✨✨
function pay<T extends Employee>(employee:T) : T {
  employee.pay();
  return employee;
}

{
  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  ellie.workFullTime();
  bob.workPartTime();

  // 💩
  const ellieAfterBadPay = payBad(ellie);
  const bobAfterBadPay = payBad(bob);
  ellieAfterBadPay //FullTimeEmployee가 사라지고 Employee타입이 되어서 workFullTime()이 사라짐

  // ✨
  const eliieAfterPay = pay(ellie);
  eliieAfterPay.workFullTime
}