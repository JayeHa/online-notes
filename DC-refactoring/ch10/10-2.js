function disabilityAmount(employee) {
  if (isNotEligibleForDisability(employee)) {
    return 0;
  }
  return 1;
}

// 동일한 동작을 수행하는 다양한 조건들이 있다면,
// 그 조건들을 하나의 조건문으로 뭉친 다음에 그에 알맞는 이름(의도)를 정해준다.
function isNotEligibleForDisability(employee) {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  );
}
