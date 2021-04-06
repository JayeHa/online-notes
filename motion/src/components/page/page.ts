export class PageCompoent extends BaseComponent{
   constructor(){
      super();
      this.element = document.createElement('ul');
      this.element.setAttribute('class', 'page');
      this.element.textContent = 'This is PageCompoenet';
   }

}