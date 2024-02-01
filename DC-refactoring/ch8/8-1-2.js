// 책에서는 overdraftCharge 메소드를 Account 클래스에서 AccountType 클래스로 이동시켰으나,
// 해당 메소드가 AccountType에 있는 상태만을 다루는 것이 아니라 계좌의 상태와 관련된 작업을 하기 때문에
// 향후 각 클래스의 구현 및 사용방식에 따라 Account 클래스에 남아있는 것이 더 적절할 수도 있습니다.
export class Account {
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

export class AccountType {
  constructor(type) {
    this._type = type;
  }
  get isPremium() {
    return this._type === "Premium";
  }

  overdraftCharge(daysOverdrawn) {
    if (!this.isPremium) {
      return daysOverdrawn * 1.75;
    }
    const baseCharge = 10;
    return daysOverdrawn <= 7
      ? baseCharge
      : baseCharge + (daysOverdrawn - 7) * 0.85;
  }
}
