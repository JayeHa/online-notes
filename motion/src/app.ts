import { Component } from './components/component';
import { TodoCompoenet } from './components/page/item/todo.js';
import { ImageComponent } from "./components/page/item/image.js";
import { NoteCompoenet } from "./components/page/item/note.js";
import { Composable, PageCompoent, PageItemComponent } from "./components/page/page.js";
import { VideoCompoent } from './components/page/item/video.js';

class App {
   private readonly page: Component & Composable;
   constructor(appRoot: HTMLElement) {
      this.page = new PageCompoent(PageItemComponent); 
      this.page.attachTo(appRoot);

      const image = new ImageComponent('Image Title' , 'https://picsum.photos/600/300');
      this.page.addChild(image);

      const video = new VideoCompoent('Video title', 'https://youtu.be/4RiI-JZkeLQ');
      this.page.addChild(video);

      const note = new NoteCompoenet('note Title', 'note body');
      this.page.addChild(note);

      const todo = new TodoCompoenet('todo Title', 'todo body');
      this.page.addChild(todo);
   }
}

new App(document.querySelector('.document')! as HTMLElement);