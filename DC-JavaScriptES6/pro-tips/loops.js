// Looping
const items = [1, 2, 3, 4, 5, 6];
// 내가 짠 코드
// let sum = 0;
// items.forEach((i) => {
//   if (i % 2 == 0) sum += i * 4;
// });
// console.log(sum);

// ❌ Bad Code 💩
// const evens = getAllEvens(items);
// const multiple = multiplyByFour(evens);
// const sum = sumArray(multiple);
// console.log(sum);

// ✅ Good Code ✨
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// ✅ Good Code ✨
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result);
