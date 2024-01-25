/**
 * 특정한 함수나 코드 블록에서 사용하고 있는 임시 변수(Temp)를 질의 함수(Query)로 대체하여 코드의 가독성과 재사용성을 높일 수 있습니다.
 * 모든 임시 변수를 무조건적으로 getter로 변경해야 하는 것은 아니며, 필요한 경우에 한해 변경하는 것이 좋습니다.
 */

class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  // 주문의 기본 가격을 계산하는 getter 함수
  get basePrice() {
    return this.#quantity * this.#item.price;
  }

  // 할인율을 계산하는 getter 함수
  get discountFactor() {
    return this.basePrice > 1000 ? 0.95 : 0.98;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }
}
