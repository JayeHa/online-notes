const price = 10000;

// const formatter = new Intl.NumberFormat("ko", {
//   style: "currency",
//   currency: "krw",
//   //   notation: "compact",
// });
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "usd",
  notation: "compact",
});
console.log(formatter.format(price));
