import { BaseComponent, Component } from "../component.js";

export interface Composable {
   addChild(child: Component): void;
}

type OnCloseListener = () => void; // 3. onCloseListener라는 타입은 아무런 인자도 전달받지 않고 리턴하지도 않아요. 그냥 "야 너 닫혔어"하고 알려주는 콜백함수입니다.
class PageItemComponent extends BaseComponent<HTMLElement> implements Composable {
   private closeListener?: OnCloseListener; // 2. 그래서 클래스 안에는 외부로부터 전달받은 콜백함수를 저장하고 있을 closeListener라는 변수를 만들고(없을수도 있으니까 Optional로)
   constructor() {
      super(`<li class="page-item">
               <section class="page-item__body"></section>
               <div class="page-item__controls">
                  <button class="close">&times;</button>
               </div>
            </li>`);
      // 1. close버튼이 클릭되면 해당하는 pageItemComponent를 페이지에서 제거를 해주면 되겠죠.
      // 우선은 생성자 안에서 close라는 클래스를 가진 버튼을 가지고 오고,
      // onclick에는 우리가 전달받은 콜백함수를 호출해주면 될 것같습니다.
      // 그래서 PageItemComponent안에 Close버튼이 클릭이 되면, 이 PageItemComponent 이 자체가 페이지에서 삭제가 되어져야겠죠.
      // 하지만 이 자체만으로는 PageItemComponent는 자기가 어디에 속해있는지 전혀 모르기 때문에 그런일을 할 수가 없고요.
      // 외부로부터 전달받은 콜백함수를 호출해주면 됩니다.
      const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
      closeBtn.onclick = () => {
         this.closeListener && this.closeListener(); // 5. 그러면 close가 클릭되면 this.closeListener가 있으면 this.closeListener를 호출해줄거예요.
         // 누군가가 등록을 해뒀다면 '야 close버튼이 클릭됐어'라고 알려만 주는거죠.
      }
   }
   addChild(child: Component) {
      const container = this.element.querySelector('.page-item__body') ! as HTMLElement;
      child.attachTo(container);
   }
   // 4. 그래서 여기에 설정할 수 있는 외부함수도 만들면 되겠죠.
   // setOnCloseListener는 우리가 들을 listener를 받아올 수 있고 아무것도 하지않는 void타입의 함수고요
   // this.closeListener를 전달받은 listener로 등록을 해주면 됩니다.
   setOnCloseListener(listener: OnCloseListener){
      this.closeListener = listener;
   }
}
export class PageCompoent extends BaseComponent<HTMLUListElement> implements Composable {
   constructor(){
      super('<ul class="page"></ul>');
   }

   addChild(section: Component) {
      const item = new PageItemComponent();
      item.addChild(section);
      item.attachTo(this.element, 'beforeend')
      // 6. PageCompoenet에서 PageItem을 생성해줬죠. 그래서 item을 만들고 item을 페이지에다가 추가해주었는데요.
      // 자, 이제는 item의 setOncloseListener의 우리의 콜백함수를 등록해줄거예요.
      // PageItemComponent를  attach를 할 수 있다면 remove, 삭제도 할 수 있어야겠죠. 
      // Component정의부분으로 가셔서요.
      item.setOnCloseListener(() => {
         item.removeFrom(this.element);
      })
   }

}