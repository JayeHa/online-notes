{
   type PageInfo = {
      title: string;
   };

   type Page = 'home' | 'about' | 'contact';

   // 📌레코드 타입
   const nav: Record<Page, PageInfo> = {
      home: {title: 'Home'},
      about: {title: 'About'},
      contact: {title: 'Contact'},
   }

   // 이것들을 서로 묶을 수 있는 것이 바로 레코드 타입입니다.
   // 이 레코드는 한 Page당 이 PageInfo를 연결할 수 있어요.
   // 자료구조 맵에 익숙하시다면 Page와 PageInfo를 묶어주는 그런 일을 하는데요
   
   // 자, 이처럼 레코드라는 타입은 우리가 맵과 비슷하게 하나와 어떤 하나를 연결하고 싶을 때
   // 하나를 키로 쓰고 나머지를 다른 타입으로 묶고 싶을 때 유용하게 쓸 수 있어요.
}