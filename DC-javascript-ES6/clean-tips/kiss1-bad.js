// 💩
function getFirst(array, isEven) {
  return array.find((x) => (isEven ? x % 2 === 0 : x % 2 !== 0));
}

// 💩
function getFirst(array, isEven) {
  if (isEven) {
    return array.find((x) => x % 2 === 0);
  } else {
    return array.find((x) => x % 2 !== 0);
  }
}
