/**
 * 불변성은 좋다
 * -> 프로그램의 안정성을 높여주니까!
 *
 * But,
 * 내 변경사항이 다른 곳에 즉각적으로 변경이 되어야 하는 경우(ex. 이름)라면, 가변성인 참조를 사용해야 한다.
 * 그리고 이 참조를 사용할 때, 고유한 아이디 별로 하나의 인스턴스를 보장하고 싶다면 레파지토리 패턴을 사용하는 것이 좋다.
 */

const customerRepository = new CustomerRepository();

const order = new Order(
  data.number,
  customerRepository.registerCustomer(data.customerId)
);

class Order {
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
