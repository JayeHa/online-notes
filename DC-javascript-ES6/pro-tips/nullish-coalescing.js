{
  // Nullish coalescing operator ??
  // ❌ Bad Code 💩
  function printMessage(text) {
    let message = text;
    if (text == null || text == undefined) {
      message = "Nothing to display 😜 ";
    }
    console.log(message);
  }

  // ✅ Good Code ✨
  function printMessage(text) {
    const message = text ?? "Nothing to display 😜 ";
    console.log(message);
  }

  // 🚨 Default parameter is only for undefined
  // => undefined일 경우만 적용됨 (null은 해당하지 않음)
  function printMessage(text = "Nothing to display 😜 ") {
    console.log(text);
  }

  // 🚨 Logical OR operator ||
  //  => falsy값에 적용
  // falsy: null, undefined, 0, -0, false, NaN, ""
  // nullish: null, undefined
  function printMessage(text) {
    const message = text || "Nothing to display 😜 ";
    console.log(message);
  }

  printMessage("Hello");
  printMessage(undefined);
  printMessage(null);
  printMessage(0);
  printMessage("");

  // =======================================================
  // value가 아니고 expression이기 때문에 코드를 실행해서 실행된 값을 할당할 때도 많이 쓰이고 있음!
  const result = getInitalState() ?? fetchFromServer();
  console.log(result);

  function getInitalState() {
    return null;
  }
  function fetchFromServer() {
    return "Hiya from 💻";
  }
}
