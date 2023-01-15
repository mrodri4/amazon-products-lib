import { BuyCtaProperties } from '../../enums/BuyCta.properties';
import type { BuyCtaProps } from '../../types/BuyCta.type';

import { WebComponent } from '../WebComponent/WebComponent';
import { BuyCta } from './BuyCta';

export class BuyCtaWc extends WebComponent<BuyCtaProps> {
  constructor() {
    super(BuyCtaProperties);
  }

  protected render(props: BuyCtaProps): void {
    this.root.render(
      <BuyCta {...props} />
    );
  }
}

customElements.define('apl-vertical-product', BuyCtaWc);
