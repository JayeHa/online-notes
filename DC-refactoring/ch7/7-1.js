class Organization {
  #name;
  #country;

  constructor({ name, country }) {
    this.#name = name;
    this.#country = country;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }

  // 서버와 JSON 등의 형태로 통신해야할 때, 객체 데이터를 반환합니다.
  get rawData() {
    // return { ...this.#data }; // 얕은복사, cloneDeep
    return { name: this.name, country: this.country };
  }
}

// 프론트 내부에서 사용할 때는 간단하게 구현합니다.
// const organization = new Organization("Acme Gooseberries", "GB");

// 서버나 외부 라이브러리와 통신해야할 때는 객체형태로 할 수 있습니다.
const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

// 데이터 변경 및 접근
organization.name = "Dream Coding";
console.log(organization.name); // "Dream Coding"
console.log(organization.country); // "GB"

// 데이터를 서버에 전송할 때는 rawData를 사용합니다.
const dataToSend = organization.rawData;
console.log(dataToSend); // { name: "Dream Coding", country: "GB" }
