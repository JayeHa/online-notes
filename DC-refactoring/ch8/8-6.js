// 관련있는 코드들이 가까이 모여 있다면 코드를 이해할때나 리펙토링하기 더 쉬워진다.
// 하나의 데이터 구조를 사용하는 문장들은 한데 모여있는 것이 좋다.
// 변수를 선언한다면, 그 변수를 사용하는 곳과 밀접하게 가까이 하는게 좋다.

// 예제 1
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retrieveOrder();
let charge;

// 예제 2
function someFunc() {
  const result =
    availableResources.length === 0
      ? createResource()
      : availableResources.pop();
  allocatedResources.push(result);
  return result;
}
