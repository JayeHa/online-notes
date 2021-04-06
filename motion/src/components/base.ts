class BaseComponent{
   protected element: HTMLElement;
   constructor(){
      this.element = document.createElement('');
   }

   attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin' ){
      parent.insertAdjacentElement(position, this.element);
   }
}