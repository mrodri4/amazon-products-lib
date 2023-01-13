import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { HorizontalProduct } from './HorizontalProduct';

const Component: ComponentMeta<typeof HorizontalProduct> = {
  title: 'Components/HorizontalProduct',
  component: HorizontalProduct
};

export default Component;

const Template: ComponentStory<typeof HorizontalProduct> = (args) => <HorizontalProduct {...args} />;

export const DefaultTemplate = Template.bind({});
DefaultTemplate.args = {
  bestseller: 1,
  label: 'Irrigadores Bucales - PECHAM Irrigador Dental Inalámbrico Portátil con 4 Boquillas 4 Modos 300...',
  image: 'https://m.media-amazon.com/images/I/71-ra-zphYS._AC_SL1500_.jpg',
  price: '39,99 EUR',
  url: 'https://www.amazon.es/dp/B07PMM4FB2?tag=seominanco-21&linkCode=ogi&th=1&psc=1&keywords=irrigador%20dental'
};
