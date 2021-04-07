import { TodoCompoenet } from './components/page/item/todo.js';
import { ImageComponent } from "./components/page/item/image.js";
import { NoteCompoenet } from "./components/page/item/note.js";
import { PageCompoent } from "./components/page/page.js";
import { VideoCompoent } from './components/page/item/video.js';

class App {
   private readonly page: PageCompoent;
   constructor(appRoot: HTMLElement) {
      this.page = new PageCompoent();
      this.page.attachTo(appRoot);

      const image = new ImageComponent('Image Title' , 'https://picsum.photos/600/300');
      image.attachTo(appRoot, 'beforeend');

      const video = new VideoCompoent('Video title', 'https://youtu.be/4RiI-JZkeLQ');
      video.attachTo(appRoot, 'beforeend');

      const note = new NoteCompoenet('note Title', 'note body');
      note.attachTo(appRoot, 'beforeend');

      const todo = new TodoCompoenet('todo Title', 'todo body');
      todo.attachTo(appRoot, 'beforeend');
   }
}

new App(document.querySelector('.document')! as HTMLElement);