import { Component } from './components/component.js';
import { TodoCompoenet } from './components/page/item/todo.js';
import { ImageComponent } from "./components/page/item/image.js";
import { NoteCompoenet } from "./components/page/item/note.js";
import { Composable, PageCompoent, PageItemComponent } from "./components/page/page.js";
import { VideoCompoent } from './components/page/item/video.js';
import { InputDialog } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';

class App {
   private readonly page: Component & Composable;
   constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
      this.page = new PageCompoent(PageItemComponent); 
      this.page.attachTo(appRoot);

      // const image = new ImageComponent('Image Title' , 'https://picsum.photos/600/300');
      // this.page.addChild(image);
      // const video = new VideoCompoent('Video title', 'https://youtu.be/4RiI-JZkeLQ');
      // this.page.addChild(video);
      // const note = new NoteCompoenet('note Title', 'note body');
      // this.page.addChild(note);
      // const todo = new TodoCompoenet('todo Title', 'todo body');
      // this.page.addChild(todo);


      const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
      imageBtn.addEventListener('click', () => {
         const dialog = new InputDialog();
         const inputSection = new MediaSectionInput();
         dialog.addChild(inputSection);
         dialog.attachTo(dialogRoot);

         dialog.setOncloseListener(()=>{
            dialog.removeFrom(dialogRoot);
         });

         dialog.setOnsubmitListener(()=>{
            const image = new ImageComponent(inputSection.title , inputSection.url);
            this.page.addChild(image);
            dialog.removeFrom(dialogRoot);
         }); 
      });

      const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
      videoBtn.addEventListener('click', () => {
         const dialog = new InputDialog();
         const inputSection = new MediaSectionInput();
         dialog.addChild(inputSection);
         dialog.attachTo(dialogRoot);

         dialog.setOncloseListener(()=>{
            dialog.removeFrom(dialogRoot);
         });

         dialog.setOnsubmitListener(()=>{
            const vedio = new VideoCompoent(inputSection.title , inputSection.url);
            this.page.addChild(vedio);
            dialog.removeFrom(dialogRoot);
         }); 
      });

      const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
      noteBtn.addEventListener('click', () => {
         const dialog = new InputDialog();
         const inputSection = new TextSectionInput();
         dialog.addChild(inputSection);
         dialog.attachTo(dialogRoot);

         dialog.setOncloseListener(()=>{
            dialog.removeFrom(dialogRoot);
         });

         dialog.setOnsubmitListener(()=>{
            const note = new NoteCompoenet(inputSection.title , inputSection.body);
            this.page.addChild(note);
            dialog.removeFrom(dialogRoot);
         }); 
      });

      const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
      todoBtn.addEventListener('click', () => {
         const dialog = new InputDialog();
         const inputSection = new TextSectionInput();
         dialog.addChild(inputSection);
         dialog.attachTo(dialogRoot);

         dialog.setOncloseListener(()=>{
            dialog.removeFrom(dialogRoot);
         });

         dialog.setOnsubmitListener(()=>{
            const todo = new TodoCompoenet(inputSection.title , inputSection.body);
            this.page.addChild(todo);
            dialog.removeFrom(dialogRoot);
         }); 
      });



   }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);