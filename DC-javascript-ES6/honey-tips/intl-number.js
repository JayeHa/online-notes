const views = 9744642;

// const formatter = new Intl.NumberFormat("ko"); // 9,744,642
// const formatter = new Intl.NumberFormat("ko", { notation: "compact" }); // 974만
// const formatter = new Intl.NumberFormat("en", { notation: "compact" }); // 9.7M
// const formatter = new Intl.NumberFormat("en", {
//   notation: "compact",
//   compactDisplay: "long",
// }); // 9.7 million

const formatter = new Intl.NumberFormat(navigator.language, {
  notation: "compact",
  compactDisplay: "long",
});
console.log(views);
console.log(formatter.format(views));
