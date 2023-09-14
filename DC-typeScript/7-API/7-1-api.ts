// https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts
Array;
[1, 2].map;

type Student = {
  passed: boolean;
}

const students: Student[] = [{passed: true},{passed: true},{passed: true}];
const result = students.every(student => {
  return student.passed;
});
console.log(result);


//
class Animal{}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal{
  isDog: boolean = false;
}
const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat));

