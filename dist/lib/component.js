export class Component {
    content;
    constructor(templateHTML) {
        const wrapper = document.createElement("template");
        wrapper.innerHTML = templateHTML;
        const realTemplate = wrapper.content.querySelector("template");
        if (realTemplate) {
            this.content = realTemplate.content.cloneNode(true);
        }
    }
}
