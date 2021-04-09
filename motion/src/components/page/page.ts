import { BaseComponent, Component } from "../component.js";

export interface Composable {
   addChild(child: Component): void;
}
type OnCloseListener = () => void;

// 2. 자 그래서요 우리가 어떤 PageItemCompoenet인지는 상관없지만 interface를 따라가야하는데요,
// 바로 이 section을 감쌀 수 있는 SectionContainer라고 하는 것은요
// SectionContainer가 되려면 꼭 따라야하는 규격사항이 있는데
// 무조건 Component인터페이스를 구현해야 되고, 여러가지 자식들을 함께 추가할 수 있는 Composable인터페이스를 구현해야해
// 그리고 꼭 한 가지 있어야되는 것은 setOnCloseListnenr가 있어야된다라고 구현해볼 수 있겠죠.

// 이렇게 규격사항을 명확하게 정의해두고요
// 각각의 노트나 비디오나 이미지나 이런 섹션을 감쌀 수 있는 컨테이너는 무조건 Component와 Composable인터페이스를 구현해야되고
// 하나 더 추가적으로 setOnCloseListener라는 API가 있어야한다고 규격할 수 있고요
interface SectionContainer extends Component, Composable {
   setOnCloseListener(listener: OnCloseListener):void;
}

// 6. type에 SectionContainerConstruct타입이라는 것은 아무것도 전달받지 않는 생성자가 있고,
// 생성자를 호출하면 SectionContainer를 만드는 그 어떤 클래스라도 괜찮다고 타입을 정의할 수 있어요.
type SectionContainerConstructor = {
   new (): SectionContainer; // SectionContainer라는 interface의 규격을 따라가는 클래스의 생성자를 정의하는 타입입니다.
}

// 9. 그래서 우리가 다른 타입의, 예를 들어 다크모드의 DarkPageItemComponent를 app.ts에서 전달해주면 PageComponent는 전달된 아이템을 만들기 때문에
// 조금 더 확장이 가능하고 유연한 컴포넌트가 될 수 있겠죠.
// 여기까지 인터페이스를 썼을 때의 파워를 알아보았고요, 디펜던시 인젝션을 어떻게 활용할 수 잇는지, 생성자 타입은 어떻게 만들 수 있는지 알려드렸습니다.
// export class DarkPageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {...}

// 1. PageItemComponent는 우리가 전달한 이미지나 비디오같은 아이들을 어떻게 감쌀건지를 결정하는 아이입니다.
// 그래서 다른 종류의 PageItemComponent는 다른 형태로, 다른 UI로 감쌀 수 있겠죠.
// 여기에서 공통적인 하나의 기능을 생각해볼 수 있는데요
// '어떤 방식으로 UI를 만들든 그건 너의 구현사항이고 한 가지 꼭 지켜야하는 것은 close Icon Listener, 여기 setOnCloseListener를 꼭 구현해두어야해
// 그래서 UI를 어떻게 가져가든지 상관없지만 Close버튼이 있어서 꼭 close가 가능하도록 만들어야 된다
// 그것을 규격하는 아이가 PageItemComponent라고 말할 수 있다'라고 정의해볼 수 있겠죠.
export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer { // 3. 그래서 PageItemComponent는 SectionContainer만 구현하면 됩니다.
   private closeListener?: OnCloseListener; 
   constructor() {
      super(`<li class="page-item">
               <section class="page-item__body"></section>
               <div class="page-item__controls">
                  <button class="close">&times;</button>
               </div>
            </li>`);

      const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
      closeBtn.onclick = () => {
         this.closeListener && this.closeListener(); 
      }
   }
   addChild(child: Component) {
      const container = this.element.querySelector('.page-item__body') ! as HTMLElement;
      child.attachTo(container);
   }

   setOnCloseListener(listener: OnCloseListener){
      this.closeListener = listener;
   }
}
// 7. 이제 PageComponent는 정해진 어떤 특정한 클래스를 만드는 것이 아니라
// constructor에서 전달된 SectionContainerConstruct타입의 아이를 생성하게 됩니다.
export class PageCompoent extends BaseComponent<HTMLUListElement> implements Composable {
   constructor(private pageItemConstructor: SectionContainerConstructor){ // 4. constructor에 어떤 타입의 데이터를 만들 수 있는지 전달해줄거예요.
      super('<ul class="page"></ul>');
   }

   addChild(section: Component) {
      const item = new this.pageItemConstructor(); //5. 그래서 내부에서 한 가지 클래스를 만드는 것이 아니라 외부에서 전달된 pageItemConstructor를 이용해서 만들 수 있어요.
      item.addChild(section);
      item.attachTo(this.element, 'beforeend');
      item.setOnCloseListener(() => {
         item.removeFrom(this.element);
      })
   }

}