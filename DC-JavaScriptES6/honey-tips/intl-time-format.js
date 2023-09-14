const date = new Date(2019, 10, 12);
console.log(date.toString());
// console.log(new Intl.DateTimeFormat("en-US").format(date));
// console.log(new Intl.DateTimeFormat("ko").format(date));
// console.log(new Intl.DateTimeFormat("de").format(date));
// console.log(new Intl.DateTimeFormat("zh").format(date));

console.log(
  date.toLocaleDateString("ko", {
    dateStyle: "full",
  })
);
console.log(
  date.toLocaleDateString("ko", {
    minute: "numeric",
    hour: "numeric",
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "long",
  })
);
