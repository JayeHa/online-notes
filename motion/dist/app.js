import { PageCompoent } from "./components/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageCompoent();
        this.page.attachTo(appRoot);
    }
}
new App(document.querySelector('.document'));
