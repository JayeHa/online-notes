{
  // 문자열타입
  let string = '안녕하세요';
  string = `안녕!`;
  console.log(string);

  // 특수 문자 출력하는법
  string = "'안녕!'";
  console.log(string);

  string = '안녕! \n 엘리야! \t\t내 이름은 \\\u09ac';
  console.log(string);

  // 템플릿 리터럴 (Template Literal)
  let id = '엘리';
  let greetings = "'안녕!, " + id + '✋\n즐거운 하루 보내요!';
  console.log(greetings);

  greetings = `'안녕, ${id}✋
  즐거운 하루 보내요!`;
  console.log(greetings);
}
