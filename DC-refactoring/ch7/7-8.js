/**
 * 7.8 중개자 제거하기
 * - 중개자가 단순히 기능을 전달하기만 하는 '불필요한' 중개자라면, 그 중개자를 제거하는 것이 코드를 더 간결하고 직관적으로 만들 수 있음
 * - 클래스를 분리(extract)할 것인지, 아니면 분리된 클래스를 다시 통합(inline)할 것인지 결정
 * - 각각의 접근 방식이 어떤 이점을 가지는지, 현재의 구조가 불필요한 중개자를 포함하고 있는지를 직관적으로 판단
 * -> 틀렸다면 리팩터링을 통해 개선해 나간다
 *
 *   중개자: 위임, 컴포지션
 * - 클래스 A가 모든 코드를 내부적으로 가지고 있는 것이 아니라, 별도의 클래스 B를 내부적으로 포함(컴포지션)하여, A 클래스가 B 클래스를 중개자로 활용하여 필요한 기능을 B에게 위임하는 구조
 * - 전화번호가 필요할 경우, 전화번호부 클래스에서 직접 가져오는 것이 아니라 중개자를 통해 전화번호를 얻음
 *
 */
class Person {
  #name;
  #manager;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
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

const person = new Person("Tom", "aManager", "999");
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
