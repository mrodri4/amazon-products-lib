import axios from 'axios';
import clipboardy from 'clipboardy';
import { load } from 'cheerio';

const componentsMap = {
  BuyCta: 'apl-buy-cta',
  HorizontalProduct: 'apl-horizontal-product',
  VerticalProduct: 'apl-vertical-product'
};
const componentsKeys = Object.keys(componentsMap);
const maxTitleSize = 85;

const [,, component, url] = process.argv;

try {
  if (!componentsKeys.includes(component)) {
    throw new Error(`Component: "${component}" is not a valid component. Use one of this ${componentsKeys.join(', ')}`)
  }

  axios.get(url)
    .then(response => {
      const $ = load(response.data);
      const titleValue = $('#productTitle').text().trim();
      const title = titleValue.length > maxTitleSize ? `${titleValue.substring(0, maxTitleSize)}...` : titleValue;
      const image = $('#landingImage').attr('data-old-hires').trim();
      const price = $('#corePriceDisplay_desktop_feature_div .a-price.priceToPay .a-offscreen:first-child').first().text().trim();
      const tag = componentsMap[component];
      const result = `<${tag} url="${url}" label="${title}" image="${image}" price="${price}"></${tag}>`;

      clipboardy.writeSync(result);

      console.log('Component copied to clipboard.');
    })
    .catch(console.error);
} catch (error) {
  console.error(error);
}
