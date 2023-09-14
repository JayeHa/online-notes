// Template Literals (Template String)
const person = {
  name: "Julia",
  score: 4,
};

// ❌ Bad Code 💩
console.log("Hello" + person.name + ", Your current score is:" + person.score);

// ✅ Good Code ✨
console.log(`Hello ${person.name}, Your current scroe is: ${person.score}`);

// ✅ Good Code ✨
const { name, score } = person;
console.log(`Hello ${name}, Your current scroe is: ${score}`);

// 한단계더!] 글로벌적으로 무언가를 설정하고 코드를 작성하기보다는 재사용이 가능하도록 함수를 만들면
// 수정할때도 한 곳에서만 바꾸면 되고, 확장성 유지보수성으로 좋음 :)
// ✅ Good Code ✨
function greetings(person) {
  const { name, score } = person;
  console.log(`Hello ${name}, Your current scroe is: ${score}`);
}
