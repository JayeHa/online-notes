{
   // Map타입: 기존에 있는 타입들을 이용하면서 조금 다른 형태로 변환할 수 있는 것
   type Video = {
      title: string;
      author: string;
   };

/*   
   type VodeoOptional = {
      title?: string;
      author?: string;
   }
   
   type VodeoReadOnly = {
      readonly title: string;
      readonly author: string;
   };
   // Video의 optional과 readOnly타입을 따로 선언하면 변경될 때마다 여기저기 다 다니면서 수정해줘야 함.
   // 이것들을 재사용성을 높이고 간편하게 하는 것이 맵타입
*/


   // [1, 2].map(item => item * item); // [1, 4] ======================================================================
   // 배열에서의 map과 마찬가지로 맵 타입을 활용하면 기존의 타입을 다른 형태로 변환할 수 있음

   // 어떤 타입이던지 인덱스 괄호 기호를 이용하면 오브젝트에 있는 모든 키들을 하나씩 빙글빙글 돌 수 있음(for...in을 썼을 때와 동일)
   type Optional<T> = {
      [P in keyof T]?: T[P]; // for...in
   };
   // 기존에 있는 T 오브젝트 타입의 모든 키들을 빙글빙글 돌면서 
   // T타입에 있는 그 키에 해당하는 value의 타입을 이렇게 다시 정의


   type VideoOptional = Optional<Video>;
   // VideoOptional은 우리가 정의한 Optional에 전달된 Video의 키들을 빙글빙글 돌면서
   // title은 Optional로 만들고, title의 value의 타입인 string을 받음.
   // 그리고 다음 키인 author의 키와 그것을 Optional로 만들고, author의 타입인 string을 받아 새로운 obj를 만들 수 있음
   const videoOp: VideoOptional = {
      title: "hi",
      // name: "ellie",
   };

   // Optional<T>은 Video뿐만 아니라 Animal에도 사용가능
   type Animal = {
      name: string;
      age: number;
   }
   const animal: Optional<Animal> = {
      name: 'dog',
   };
   // 이렇게 한 번 정의해놓으면 재사용성이 굉장히 높습니다.


   // ReadOnly로 다시 복습 ======================================================================
   // T타입에 있는 모든 키들을 순차적으로 P에 할당하고요, 그래서 P 키는 Optional이고 그 P의 값의 타입을 이렇게 맵핑해서 만들 수가 있어요.
   type ReadOnly<T> = {
      readonly [P in keyof T]: T[P];
   }
   animal.name = 'ellie';
   
   const video: ReadOnly<Video> = {
      title: 'hi',
      author: 'ellie',
   }   
   // video.author = 'hello';
   // 이처럼 맵 타입을 이용하면 기존의 타입에서 다른 타입으로 성질을 변화할 수가 있습니다.
   
   // Nullable로 복습 ======================================================================
   type Nullable<T> = { [P in keyof T]: T[P] | null };
   const obj2: Nullable<Video> = {
      title: null,
      author: null,
   };

   // const obj2: <Video> = {
   //    title: null,
   //    author: null,
   // };

   
   // 타입스크립트 문서 ======================================================================
   // Proxify라는 타입은 전달되는 어떤 오브젝트를 빙글빙글 돌면서 타입을 이렇게 Proxy라는 타입으로 한 단계 감싸는 역할을 해줍니다.
   type Proxy<T> = {
      get(): T;
      set(value: T): void;
   };

   type Proxify<T> = {
      [P in keyof T]: Proxy<T[P]>;
   }

   // 자, 이처럼 맵 타입을 이용하면 기존에 있는 타입에서 조금 더 다른 형태로 변환하는 것들을 해볼 수가 있음

}