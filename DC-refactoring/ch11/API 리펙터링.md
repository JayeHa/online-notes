# CHAPTER 11 API 리펙터링

- [CHAPTER 11 API 리펙터링](#chapter-11-api-리펙터링)
  - [11.1 질의 함수와 변경 함수 분리하기](#111-질의-함수와-변경-함수-분리하기)
  - [11.2 함수 매개변수화하기](#112-함수-매개변수화하기)
  - [11.3 플래그 인수 제거하기](#113-플래그-인수-제거하기)
  - [11.4 객체 통째로 넘기기](#114-객체-통째로-넘기기)
  - [11.5 매개변수를 질의 함수로 바꾸기](#115-매개변수를-질의-함수로-바꾸기)
  - [11.6 질의 함수를 매개변수로 바꾸기](#116-질의-함수를-매개변수로-바꾸기)
  - [11.7 세터 제거하기](#117-세터-제거하기)
  - [11.8 생성자를 팩터리 함수로 바꾸기](#118-생성자를-팩터리-함수로-바꾸기)
  - [11.9 함수를 명령으로 바꾸기](#119-함수를-명령으로-바꾸기)

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

### 11.3 플래그 인수 제거하기

[📂 11-3 적용예시](./11-3.js)

```js
// 예제 1
function setDimension(name, value) {
  if (name === "height") {
    this._height = value;
    return;
  }
  if (name === "width") {
    this._width = value;
    return;
  }
}

// 예제 2
class Concert {
  book(customer, isPremium) {}
}

// 예제 3
function setSwitch(on) {}
```

### 11.4 객체 통째로 넘기기

[📂 11-4 적용예시](./11-4.js)

```js
export function temperatureAlerts(room, plan) {
  const alerts = [];
  const low = room.daysTempRange.low;
  const high = room.daysTempRange.high;
  if (!plan.withinRange(low, high)) {
    alerts.push("room temperature went outside range");
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(bottom, top) {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    );
  }
}
```

### 11.5 매개변수를 질의 함수로 바꾸기

[📂 11-5 적용예시](./11-5.js)

```js
export class Order {
  constructor(quantity, itemPrice) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;
    let discountLevel;
    if (this.quantity > 100) discountLevel = 2;
    else discountLevel = 1;
    return this.discountedPrice(basePrice, discountLevel);
  }

  discountedPrice(basePrice, discountLevel) {
    switch (discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
    }
  }
}
```

### 11.6 질의 함수를 매개변수로 바꾸기

[📂 11-6 적용예시](./11-6.js)

```js
targetTemperature(aPlan);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(aPlan) {
  currentTemperature = thermostat.currentTemperature;
  // ...
}
```

### 11.7 세터 제거하기

[📂 11-7 적용예시](./11-7.js)

```js
class Person {
  get name() {}
  set name(value) {}
}
```

### 11.8 생성자를 팩터리 함수로 바꾸기

[📂 11-8 적용예시](./11-8.js)

```js
export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesman" };
  }
}
```

### 11.9 함수를 명령으로 바꾸기

[📂 11-9 적용예시](./11-9.js)

```js
export function score(candidate, medicalExam, scoringGuide) {
  let result = 0;
  let healthLevel = 0;
  let highMedicalRiskFlag = false;

  if (medicalExam.isSmoker) {
    healthLevel += 10;
    highMedicalRiskFlag = true;
  }
  let certificationGrade = "regular";
  if (scoringGuide.stateWithLowCertification(candidate.originState)) {
    certificationGrade = "low";
    result -= 5;
  }
  // lots more code like this
  result -= Math.max(healthLevel - 5, 0);
  return result;
}

export class ScoringGuide {
  stateWithLowCertification(state) {
    return state < 5;
  }
}
```
