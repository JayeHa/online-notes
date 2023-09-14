{
   const obj = {
      name: 'ellie',
   }
   obj.name;   //ellie
   obj['name'] // ellie

   type Animal = {
      name: string;
      age: number;
      gender: 'male' | 'famale';
   };

   type Name = Animal['name'] //string
   const text: Name = 'hello';

   type Gender = Animal['gender']; //'male' | 'female'

   type Keys = keyof Animal; // 'name' | 'age' | 'gender'
   const key: Keys = 'gender';

   type Person = {
      name: string;
      gender: Animal['gender'];
   };
   const person: Person = {
      name: 'ellie',
      gender: 'male',
   };

   // 이처럼 인덱스 타입을 이용하면 다른 타입에 있는 키에 접근해서
   // 그 키의 value의 타입을 그대로 다시 선언하는 것을 할 수 있습니다.
   
   // 이 자체로는 그렇게 쓸모있어 보이지 않는데요
   // 차차 뒤에 이어지는것부터 하나씩 알아보면서 어떻게 활용할 수 있는지도 알려드릴게요.
}