class List {}

class Stack {
  constructor() {
    this.storage = new List();
  }

  pop() {}

  push() {}
}

/**
 * before:
 * 노출하고 싶지 않는 것들도 다 상속받게 됨
 *
 * after:
 * 내부에서 리스트를 사용 -> 원하는 동작들만 외부로 노출
 */
