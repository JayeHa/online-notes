import { getDefaultOwner } from "./6-6.js";

const owner = getDefaultOwner();
// owner.firstName = "엘리"; // 수정불가능
console.log(owner.firstName);
console.log(getDefaultOwner());
