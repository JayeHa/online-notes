/**
 * 가변성에 대한 위험성
 * 가변적인 데이터는 실수 혹은 고의로 외부에서 마음대로 번호를 바꿀 수 있다.
 * 이렇게 한 부분에서 객체의 상태를 변경하면, 그 객체를 의존하는 다른 부분들도 영향을 받게 된다.
 * 따라서 데이터의 현재 상태를 예측하기 어려워지고 버그를 발견하고 해결하는 과정이 복잡해진다. (시스템 안정성 저하)
 *
 * 메모리 최적화? -> 측정 후 "문제가 되면" 개선해라 (그 전에는 하지 마라)
 * 정말 미세한 성능을 잃게 되어도 안정성을 확보할 수 있기 때문
 *
 *
 * 참조를 값으로 바꾸면?
 * 데이터의 불변성이 보장되어 예측 가능성과 디버깅 용이성을 향상시킨다.
 */
class Person {
  #name;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(value) {
    this.#telephoneNumber = new TelephoneNumber(value, this.officeNumber);
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  set officeNumber(value) {
    this.#telephoneNumber = new TelephoneNumber(this.officeAreaCode, value);
  }
}

class TelephoneNumber {
  #areaCode;
  #number;
  constructor(area, number) {
    this.#areaCode = area;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }

  get number() {
    return this.#number;
  }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const person = new Person("엘리", "010", "12345678");
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
