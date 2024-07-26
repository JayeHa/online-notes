# CHAPTER 11 API 리펙터링

- [CHAPTER 11 API 리펙터링](#chapter-11-api-리펙터링)
  - [11.1 질의 함수와 변경 함수 분리하기](#111-질의-함수와-변경-함수-분리하기)

### 11.1 질의 함수와 변경 함수 분리하기

[📂 11-1 적용예시](./11-1.js)

```js
// 예제 1
function totalOutstandingAndSendBill() {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
  sendBill();
  return result;
}

// 예제 2
export function alertForMiscreant(people, alarm) {
  for (const p of people) {
    if (p === "Don") {
      setOffAlarms(alarm, p);
      return "Don";
    }
    if (p === "John") {
      setOffAlarms(alarm, p);
      return "John";
    }
  }
  return "";
}

function setOffAlarms(alarm, p) {
  alarm.setOff("Found Miscreant " + p);
}
```
