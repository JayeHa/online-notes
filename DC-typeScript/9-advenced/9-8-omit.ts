{
   type Video = {
      id: string;
      title: string;
      url: string;
      data: string;
   };

   function getVideo(id: string): Video{
      return {
         id,
         title: 'video',
         url: 'https://..',
         data: 'byte-data..',
      }
   }

   // Omit을 이용하면 우리가 빼고 싶은 것만 명시할 수 있음 ✨
   type VideoMetadata = Omit<Video, 'url' | 'data' | 'anytype'>; 
   function getVideoMetadata(id: string): VideoMetadata {
      return{
         id,
         title: 'title',
      }
   }

/**
 * 📌 Omit문서
*/
   // Construct a type with the properties of T except for those in type K.
   type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

   // Exclude from T those types that are assignable to U
   type Exclude<T, U> = T extends U ? never : T;
   
   // 내가 빼고자하는 것이 더 명확하다면 Omit을,
   // 선택하고자 하는 것이 더 간단하다면 Pick을 이용하면 됩니다.
}
