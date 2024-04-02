function calculateCharge(date, quantity, plan) {
  return isSummer() ? summerCharge() : regularCharge();

  // 아래 중첩함수가 외부에서 재사용이 필요하다면 외부로 추출 or 클래스화
  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
