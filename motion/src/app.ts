import { PageCompoent } from "./components/page.js";

class App {
   private readonly page: PageCompoent;
   constructor(appRoot: HTMLElement) {
      this.page = new PageCompoent();
      this.page.attachTo(appRoot);
   }
}

new App(document.querySelector('.document')! as HTMLElement);