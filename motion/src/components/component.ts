export interface Component {
   attachTo(parent: HTMLElement, position?: InsertPosition): void;
   removeFrom(parent: HTMLElement): void; // 7. 무언가를 추가할 수 있다면 삭제도 해줘야합니다. 그래서 removeFrom, parent컨테이너로부터 나 자신을 제거하는 API입니다.
}
/**
 * Encapsulate the HTML element creation
 */
export class BaseComponent<T extends HTMLElement> implements Component{
   protected readonly element: T;
   constructor(htmlString: string){
      const template = document.createElement('template');
      template.innerHTML = htmlString;
      this.element = template.content.firstElementChild! as T;
   }

   attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin' ){
      parent.insertAdjacentElement(position, this.element);
   }

   // 8. HTMLElement에는 removeChild라는 이런 API가 있어요.
   // 이걸 이용해서 parent에서 나 자신을 제거할거예요.
   // 조금 더 안전하게 작성하고 싶다면 전달받은 parent요소가 내가 지금 들어있는 이 element의 parent인지 확인하면 좋겠죠.
   removeFrom(parent: HTMLElement) {
      if(parent != this.element.parentElement){
         throw new Error('Parent mismatch!');
      }
      parent.removeChild(this.element);
   }
}