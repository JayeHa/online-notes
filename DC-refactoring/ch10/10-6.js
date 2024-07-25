/**
 * 배포할 때는 한 단계 더 감싸서 사용
 * -> 개발 단계에서는 실제로 어플리케이션이 죽어서 바로 알 수 있게 해주고,
 *    프로덕션 모드에서는 어플리케이션이 죽는 대신에 버그리포팅만 해두고 정상동작(+ 우아한 처리) 할 수 있도록 구성
 *
 */

import { strict as assert } from "node:assert";

class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    assert(number >= 0);
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

new Customer().applyDiscount(-1);
