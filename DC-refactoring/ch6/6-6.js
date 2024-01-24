// 1. 값 캡슐화하기 (복제본 반환)
let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

export function _defaultOwner() {
  return { ...defaultOwnerData }; // 중첩 형태일 경우 깊은 복사 적용 X
}

// 2. 클래스를 이용하여 변경 여부 설정 ✨
export class Person {
  #firstName;
  #lastName;
  constructor(data) {
    this.#firstName = data.firstName;
    this.#lastName = data.lastName;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }
}

let defaultOwner = new Person({ firstName: "마틴", lastName: "파울러" });

export function getDefaultOwner() {
  return defaultOwner;
}
