const formatter = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });
console.log(formatter.format(1, "day")); // 내일
console.log(formatter.format(2, "day")); // 모레
console.log(formatter.format(-1, "day")); // 어제
console.log(formatter.format(-2, "day")); // 그저께

const today = new Date();
const started = new Date(2019, 10, 12);
const daysPassed = Math.ceil((started - today) / (1000 * 60 * 60 * 24));
console.log(
  `드림코딩 유튜브 채널 시작일: ${formatter.format(daysPassed, "day")}`
); // 드림코딩 유튜브 채널 시작일: 1,110일 전

// timeago 라이브러리 추천!! 🍯
