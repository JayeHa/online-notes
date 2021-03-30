{
   type ToDo = {
      title: string;
      description: string;
   };

   function display(todo: Readonly<ToDo>) { //readonly에 ctrl(command)+클릭하면 유틸리티 클래스로 이동
      //todo.title = 'jaja';
   }
}

   // 앞에서 살펴본 인덱스 타입과 맵타입과 컨디션타입은 
   // 우리가 기존에 있는 타입을 보장하고 유지하고 재사용하면서
   // 조금 다른 종류의 타입을 만들고 싶을 때 활용할 수 있습니다.