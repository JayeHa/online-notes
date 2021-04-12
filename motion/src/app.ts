import { Component } from './components/component.js';
import { TodoCompoenet } from './components/page/item/todo.js';
import { ImageComponent } from "./components/page/item/image.js";
import { NoteCompoenet } from "./components/page/item/note.js";
import { Composable, PageCompoent, PageItemComponent } from "./components/page/page.js";
import { VideoCompoent } from './components/page/item/video.js';
import { InputDialog } from './components/dialog/dialog.js';

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

      const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
      imageBtn.addEventListener('click', () => {
         const dialog = new InputDialog();

         dialog.setOncloseListener(()=>{
            dialog.removeFrom(document.body);
         });

         dialog.setOnsubmitListener(()=>{
            // 섹션을 만들어서 페이지에 추가해준다.
            dialog.removeFrom(document.body);
         }); 
         dialog.attachTo(document.body);
      });
   }
}

new App(document.querySelector('.document')! as HTMLElement);