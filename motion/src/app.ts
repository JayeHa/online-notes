import { Component } from './components/component.js';
import { TodoCompoenet } from './components/page/item/todo.js';
import { ImageComponent } from "./components/page/item/image.js";
import { NoteCompoenet } from "./components/page/item/note.js";
import { Composable, PageCompoent, PageItemComponent } from "./components/page/page.js";
import { VideoCompoent } from './components/page/item/video.js';
import { InputDialog, MediaData, TextData } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
   new (): T;
};

class App {
   private readonly page: Component & Composable;
   constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
      this.page = new PageCompoent(PageItemComponent); 
      this.page.attachTo(appRoot);

      this.bindElementToDialog<MediaSectionInput>('#new-image', MediaSectionInput, (input: MediaSectionInput) => new ImageComponent(input.title, input.url));
      this.bindElementToDialog<MediaSectionInput>('#new-video', MediaSectionInput, (input: MediaSectionInput) => new VideoCompoent(input.title, input.url));
      this.bindElementToDialog<TextSectionInput>('#new-note', TextSectionInput, (input: TextSectionInput) => new NoteCompoenet(input.title, input.body));
      this.bindElementToDialog<TextSectionInput>('#new-todo', TextSectionInput, (input: TextSectionInput) => new TodoCompoenet(input.title, input.body));

   }

   private bindElementToDialog<T extends (MediaData | TextData) & Component >(
      selector:string,
      InputComponent: InputComponentConstructor<T>,
      makeSection: (input: T) => Component,
      ){
      const element = document.querySelector(selector)! as HTMLButtonElement;
      element.addEventListener('click', () => {
         const dialog = new InputDialog();
         const input = new InputComponent();
         dialog.addChild(input);
         dialog.attachTo(this.dialogRoot);

         dialog.setOncloseListener(()=>{
            dialog.removeFrom(this.dialogRoot);
         });

         dialog.setOnsubmitListener(()=>{
            const image = makeSection(input);
            this.page.addChild(image);
            dialog.removeFrom(this.dialogRoot);
         }); 
      });
   }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);