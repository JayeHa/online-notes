/**
 * 질의 함수로 상태의 값을 가지고 올 수 있는 경우라면, 매변수보다는 질의 형태로 작성하는 것이 더 깔끔
 */
export class Order {
  constructor(quantity, itemPrice) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get finalPrice() {
    return this.#discountedPrice();
  }

  get discountLevel() {
    return this.quantity > 100 ? 2 : 1;
  }

  #discountedPrice() {
    switch (this.discountLevel) {
      case 1:
        return this.basePrice * 0.95;
      case 2:
        return this.basePrice * 0.9;
    }
  }
}
