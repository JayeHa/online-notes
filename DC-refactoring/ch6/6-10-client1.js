import { acquireReading, enrichReading } from "./6-10.js";

const rawReading = acquireReading();
const reading = enrichReading(rawReading); // 호출 시점에 데이터를 가지고 옴

console.log(reading.baseCharge);
console.log(reading.taxableCharge);
