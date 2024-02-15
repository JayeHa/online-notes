/**
 * 아래와 같이 내부 이름은 그대로 유지하고 코드베이스에서 사용할 때는 title로 변경할 수 있다.
 * 요지) 클래스/객체 안에 있는 필드는 이름이 너무나 중요하기 때문에 의도를 나타낼 수 있는 이름으로 바꾸어 나가야 한다.
 */
class Organization {
  constructor(data) {
    this._name = data.title;
    this._country = data.country;
  }
  get title() {
    return this._name;
  }
  set title(value) {
    this._name = value;
  }
  get country() {
    return this._country;
  }
  set country(value) {
    this._country = value;
  }
}
const organization = new Organization({
  title: "드림코딩",
  country: "대한민국",
});
