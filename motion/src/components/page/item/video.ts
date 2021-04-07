import { BaseComponent } from "../../component.js";

export class VideoCompoent extends BaseComponent<HTMLElement>{
   constructor(title: string, url: string){
      super(`<section class="video">
               <div class="video__player"><iframe class="video__iframe"></iframe></div>
               <h3 class="video__title"></h3>
            </section>`);

      const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
      iframe.src = 'https://youtube.com/embed/F9NkdprdcdQ'; // url -> videoId -> embed
      url;

      const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
      titleElement.textContent = title;

   }
}