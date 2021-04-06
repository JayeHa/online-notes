export class PageCompoent{
   private element: HTMLUListElement;
   constructor(){
      this.element = document.createElement('ul');
      this.element.setAttribute('class', 'page');
      this.element.textContent = 'This is PageCompoenet';
   }

   attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin' ){
      parent.insertAdjacentElement(position, this.element);
   }
}