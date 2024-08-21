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

  static createEngineer(name) {
    return new Employee(name, "E");
  }

  static createManager(name) {
    return new Employee(name, "M");
  }

  static createSalesman(name) {
    return new Employee(name, "S");
  }
}

// const employee = new Employee();
const employee = Employee.createEngineer("엘리");
