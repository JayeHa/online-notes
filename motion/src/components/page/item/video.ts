import { BaseComponent } from "../../component.js";

export class VideoCompoent extends BaseComponent<HTMLElement>{
   constructor(title: string, url: string){
      super(`<section class="video">
               <iframe class="video__holder" width="600" height="300"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               <h2 class="video__title"></h2>
            </section>`);

      const videoElement = this.element.querySelector('.video__holder')! as HTMLVideoElement;
      url = url.replace('youtu.be','www.youtube.com/embed');
      videoElement.src = url;
      const titleElement = this.element.querySelector('.video__title')! as HTMLParagraphElement;
      titleElement.textContent = title;
   }
}