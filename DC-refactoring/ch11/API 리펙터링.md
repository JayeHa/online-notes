# CHAPTER 11 API 리펙터링

- [CHAPTER 11 API 리펙터링](#chapter-11-api-리펙터링)
  - [11.1 질의 함수와 변경 함수 분리하기](#111-질의-함수와-변경-함수-분리하기)
  - [11.2 함수 매개변수화하기](#112-함수-매개변수화하기)

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

### 11.2 함수 매개변수화하기

[📂 11-2 적용예시](./11-2.js)

```js
// 예제 1
function tenPercentRaise(person) {
  person.salary = person.salary.multiply(1.1);
}

function fivePercentRaise(person) {
  person.salary = person.salary.multiply(1.05);
}

// 예제 2
export function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount =
    bottomBand(usage) * 0.03 + middleBand(usage) * 0.05 + topBand(usage) * 0.07;
  return usd(amount);
}

function bottomBand(usage) {
  return Math.min(usage, 100);
}

function middleBand(usage) {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

function topBand(usage) {
  return usage > 200 ? usage - 200 : 0;
}

function usd(value) {
  return {
    currency: "$",
    currencyName: "USD",
    value: value,
  };
}
```
