import { BaseComponent } from "../../component.js";

export class NoteCompoenet extends BaseComponent<HTMLUListElement>{
   constructor(title: string, context: string){
      super(`
         <section class='note'>
         <h2 class="note__title"></h2>   
         <p class="note__context"></p>
         </section>
      `);

      const titleElement = this.element.querySelector('.note__title')! as HTMLElement;
      titleElement.textContent = title;

      const contextElement = this.element.querySelector('.note__context')! as HTMLParagraphElement;
      contextElement.textContent = context;
   }
}