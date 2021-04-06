import { ImageComponent } from "./components/page/item/image.js";
import { NoteCompoenet } from "./components/page/item/note.js";
import { VideoCompoent } from "./components/page/item/video.js";
import { PageCompoent } from "./components/page/page.js";

class App {
   private readonly page: PageCompoent;
   constructor(appRoot: HTMLElement) {
      this.page = new PageCompoent();
      this.page.attachTo(appRoot);

      const image = new ImageComponent('Image Title' , 'https://picsum.photos/600/300');
      image.attachTo(appRoot, 'beforeend');

      const note = new NoteCompoenet('note Title', 'note conext, hi@');
      note.attachTo(appRoot, 'beforeend');

      const video = new VideoCompoent('video Title', 'https://youtu.be/F9NkdprdcdQ');
      video.attachTo(appRoot, 'beforeend');
   }
}

new App(document.querySelector('.document')! as HTMLElement);