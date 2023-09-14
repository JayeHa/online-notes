// Spread Syntax - Object
const item = { type: "👔", size: "M" };
const detail = { price: 20, made: "Korea", gender: "M" };

// ❌ Bad Code 💩
item["price"] = detail.price;

// ❌ Bad Code 💩
const newObject = new Object();
newObject["type"] = item.type;
newObject["size"] = item.size;
newObject["price"] = detail.price;
newObject["made"] = detail.made;
newObject["gender"] = detail.gender;

// ❌ Bad Code 💩
const newObject2 = {
  type: item.type,
  size: item.size,
  price: detail.prise,
  made: detail.made,
  gender: detail.gender,
};

// ✅ Good Code ✨
const shirt0 = Object.assign(item, detail);

// ✅ Better! Code ✨
// 값을 업데이트할 수도 있음 :)
const shirt = { ...item, ...detail, price: 40 };
