import { Component } from './components/component';
import { TodoCompoenet } from './components/page/item/todo.js';
import { ImageComponent } from "./components/page/item/image.js";
import { NoteCompoenet } from "./components/page/item/note.js";
import { Composable, PageCompoent } from "./components/page/page.js";
import { VideoCompoent } from './components/page/item/video.js';

class App {
   private readonly page: Component & Composable;
   constructor(appRoot: HTMLElement) {
      this.page = new PageCompoent(); // 우선은 생성자 안에서 PageComponent를 만들고 있는데요, 사실 안에서 다른 어떤 클래스를 만든다는 것은 위헙해요. 이런것들은 다 디펜던시 인젝션을 사용해서 외부로부터 주입받는 것이 더 확장가능하고 유닛테스트를 해 나가기에도 좋습니다.
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