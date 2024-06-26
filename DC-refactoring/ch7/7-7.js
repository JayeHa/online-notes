class Person {
  #name;
  #department;
  constructor(name, department) {
    this.#name = name;
    this.#department = department;
  }

  get name() {
    return this.#name;
  }

  get manager() {
    return this.#department.manager;
  }

  get chargeCode() {
    return this.#department.chargeCode;
  }

  get department() {
    return this.#department;
  }

  set department(arg) {
    this.#department = arg;
  }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}

// 클래스 내부에서 책임을 위임하기 위해 컴포지션을 사용합니다.
// 외부에서 무엇이 사용되고 어떻게 분리되어 있는지 알 필요가 없으므로 내부 구조를 숨기고 외부에서 간접적으로 사용합니다.
const person = new Person("Tom", new Department("aManager", "999"));
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
