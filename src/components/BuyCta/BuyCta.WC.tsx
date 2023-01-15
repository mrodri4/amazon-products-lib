import { BuyCtaProperties } from '#enums';
import type { BuyCtaProps } from '#types';

import { WebComponent } from '../WebComponent/WebComponent';
import { BuyCta } from './BuyCta';

export class BuyCtaWc extends WebComponent<BuyCtaProps> {
  constructor() {
    super(Object.values(BuyCtaProperties));
  }

  protected render(props: BuyCtaProps): void {
    this.root.render(
      <BuyCta {...props} />
    );
  }
}

customElements.define('apl-buy-cta', BuyCtaWc);
