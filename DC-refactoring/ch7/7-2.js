// 내부에서 쓰고 있는 컬렉션을 외부에 노출하지 않으며,
// 클래스 내부 메서드를 통해 컨트롤할 수 있도록 구현해야 합니다.
export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [...this.#courses]; // 복제된 배열을 반환하여 내부 데이터 보호
  }

  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);
    if (index === -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person("엘리");
const course = new Course("리팩토링", true);

ellie.addCourse(course);
console.log(ellie.courses.length); // 1

ellie.removeCourse(course, () => {
  console.log("해당 코스는 없다!");
});
console.log(ellie.courses.length); // 0

ellie.removeCourse(course, () => {
  console.log("해당 코스는 없다!"); // "해당 코스는 없다!"
});
