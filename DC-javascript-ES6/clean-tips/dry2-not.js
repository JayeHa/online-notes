// ❓
function validateBody(body) {
  if (!body.id) {
    throw new Error("Validation failed. The attribute id is missing.");
  }

  if (!body.name) {
    throw new Error("validation failed. The attribute name is missing.");
  }

  if (!body.count) {
    throw new Error("Validation failed. The attribute count is missing");
  }
}

// => DRY원칙에 위배된다고 할 수는 없음
// 물론 함수안에 코드의 중복성이 들어있어서 조금 더 간결하게 작성해볼 수는 있지만
// 한 가지의 로직을 함수 안에서 처리하고 있고, 이 로직이 다른 곳에서 중복적으로 발생하지 않기 때문.
// 이처럼 DRY는 특정한 코드의 중복만을 의미하는 것이 아니라 로직, 지식, 의도, 비지니스 로직 등 광범위한 범위를 가르키고 있음.
