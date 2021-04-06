import { BaseComponent } from "../component.js";

export class PageCompoent extends BaseComponent<HTMLUListElement>{
   constructor(){
      super('<ul class="page">This is PageComponent!</ul>');
   }

}