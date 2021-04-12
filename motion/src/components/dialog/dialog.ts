import { Composable } from './../page/page.js';
import { BaseComponent, Component } from './../component.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export class InputDialog extends BaseComponent<HTMLElement> implements Composable{
   closeListener?: OnCloseListener;
   submitistener?: OnSubmitListener;
   constructor(){
      super(`<dialog class="dialog">
               <div class="dialog__container">
                  <button class="close">&times;</button>
                  <div class="dialog__body"></div>
                  <button class="dialog__submit">ADD</button>
               </div>
            </dialog>
      `);
      const closeBtn = this.element.querySelector('.close')! as HTMLElement;
      closeBtn.onclick = () => {
         this.closeListener && this.closeListener();
      };
      
      const submitBtn = this.element.querySelector('.dialog__submit')! as HTMLElement;
      submitBtn.onclick = () => {
         this.submitistener && this.submitistener();
      };
   }
   setOncloseListener(listener: OnCloseListener){
      this.closeListener = listener;
   }
   setOnsubmitListener(listener: OnSubmitListener){
      this.submitistener = listener;
   }

   addChild(child: Component){
      const body = this.element.querySelector('.dialog__body')! as HTMLElement;
      child.attachTo(body);
   }
}