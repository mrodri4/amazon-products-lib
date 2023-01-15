import type { Root } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { getLibRequiredLinks } from '../../utils/required-links';

export abstract class WebComponent<P = Record<string, unknown>> extends HTMLElement {
  protected readonly mountPoint: HTMLSpanElement;
  protected readonly shadow: ShadowRoot;
  protected root: Root;

  constructor(private readonly props: string[] = []) {
    super();

    this.mountPoint = document.createElement('span');
    this.root = createRoot(this.mountPoint);
    this.shadow = this.attachShadow({ mode: 'closed' });

    this.addStyles();
  }

  public connectedCallback() {
    this.mount();
  }

  public disconnectCallback() {
    this.unmount();
  }

  protected getProps(): P {
    return [...this.attributes]
      .reduce<Record<string, unknown>>((prev, curr) => {
        const { name, value } = curr;

        if (this.props.includes(name)) {
          prev[name] = value;
        }

        return prev;
      }, {}) as P;
  }

  protected abstract render(props: P): void;

  private addStyles() {
    getLibRequiredLinks().forEach((link) => {
      this.shadow.appendChild(link);
    });
  }

  private unmount() {
    this.root.unmount();
  }

  private mount() {
    const props = this.getProps();

    this.shadow.appendChild(this.mountPoint);
    this.render(props);
  }
}
