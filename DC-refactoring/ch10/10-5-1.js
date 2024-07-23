/**
 * 특이 케이스(null, unknown ... )가 있는 경우,
 * null을 사용하기 보다는 이를 대표할 수 있는 널 객체 따로 만들어 두기
 * -> 다형성을 이용하기에도 좋고, null일 때의 추가적인 로직을 담을 수 있어서 유지보수성, 확장성 UP
 * -> 원시타입으로 남겨두는 경우 예상치 못한 오류가 발생할 수 있다 (예제2)
 *
 */
export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === "unknown"
      ? new UnknownCustomer()
      : new Customer(this._customer);
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

class UnknownCustomer extends Customer {
  get name() {
    return "occupant";
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // 더 많은 코드가 여기에 있음
  const customerName = aCustomer.name;
  return customerName;
}

console.log(customerName(new Site("고갱님")));
console.log(customerName(new Site("unknown")));
