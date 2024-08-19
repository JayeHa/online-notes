// 예제 1
function setWidth(name, value) {
  this._width = value;
}

function setHeight(name, value) {
  this._height = value;
}

// 예제 2
class Concert {
  // public API 에서는 flag를 사용하지 않고 나누자
  regularBook(customer) {}
  premiumBook(customer) {}
  // 중복코드 등 정말 필요한 부분이라면 private으로 사용
  #book(customer, isPremium) {}
}

// 예제 3
function switchOn() {}
function switchOff() {}
