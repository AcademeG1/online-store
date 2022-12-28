abstract class Page {
  private container: HTMLElement;
  private id: string;

  constructor (id: string) {
    this.id = id;
    this.container = document.querySelector('.main') as HTMLElement;
  }

  createNewElement (tagName: string, className: string, idName?: string, text?: string): HTMLElement {
    const element = document.createElement(tagName);
    if (className !== '') {
      element.className = className;
    }
    if (idName != null) {
      if (idName !== '') {
        element.id = idName;
      }
    }
    if (text != null) {
      element.innerText = text;
    }
    return element;
  }

  render (): HTMLElement {
    return this.container;
  }
}

export default Page;