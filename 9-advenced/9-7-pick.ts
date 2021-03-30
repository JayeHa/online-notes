{
   type Video = {
      id: string;
      title: string;
      url: string;
      data: string;
   };

   // 📌 video의 모든 정보를 리턴하는 무거운 함수
   function getVideo(id: string): Video{
      return {
         id,
         title: 'video',
         url: 'https://..',
         data: 'byte-data..',
      }
   }


   // 📌 video의 id와 title만 리턴하는 가벼운 함수 -> Pick사용✨
   type VideoMetadata = Pick<Video, 'id' | 'title'>; // 바로쓰기보단 이렇게 타입을 선언해서 재사용할 수 있도록 만드는 것이 좋다.
   function getVideoMetadata(id: string): VideoMetadata {
      return{
         id,
         title: 'title',
      }
   }
   // Pick: 기존에 있는 타입에서 내가 원하는 것만 골라다가 조금 더 제한적인 타입을 만들고 싶을 때 사용
   // 이처럼 어떠한 정보들이 많은 타입이 있고, 그 중에 몇 가지만 다루는 타입을 만든다면 Pick을 이용하면 좋다
   
   // 클릭해서 정의된 부분으로 가서 어떻게 구현되어 있는지 확인하면 더 좋음
   type Pick<T, K extends keyof T> = {
      [P in K]: T[P];
   };
   // Pick이라는 것은 어떤 타입을 받아오고, K는 T타입에 있는 키들을 상속한 아이들임
   // " K라는 것은 T타입에 있는 키들중에 하나를 써야하는구나
   // 그리고 전달된 이 키들에 한해서만 빙글빙글 돌면서 타입을 결정하는구나" 라고 이해하면 되겠죠.
   // 여기까지 Pick에 대해서 알려드렸고요, Pick말고 다른 방식으로 어떻게 동일한 것을 할 수 있는지 이어지는 영상에서 보여드릴게요.
}