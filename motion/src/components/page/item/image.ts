export class ImageComponent extends BaseComponent{
   constructor(title: string, url: string){
      super();
      const template = document.createElement('template');
      template.innerHTML = `
      <section class='image'>
         <div class="image__holder"><img class="image__thumbnail"></div>
         <p class="image__title"></p>
      </section>
      `
      this.element = template.content.firstElementChild! as HTMLElement;

      const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
      imageElement.src = url;
      imageElement.alt = title;

      const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
      titleElement.textContent = title;
   }
}