import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VerticalProduct } from './VerticalProduct';

const Component: ComponentMeta<typeof VerticalProduct> = {
  title: 'Components/VerticalProduct',
  component: VerticalProduct
};

export default Component;

const Template: ComponentStory<typeof VerticalProduct> = (args) => <VerticalProduct {...args} />;

export const DefaultTemplate = Template.bind({});
DefaultTemplate.args = {
  bestseller: 1,
  image: 'https://m.media-amazon.com/images/I/71-ra-zphYS._AC_SL1500_.jpg',
  price: '39,99 EUR',
  title: 'Irrigadores Bucales - PECHAM Irrigador Dental Inalámbrico Portátil con 4 Boquillas 4 Modos 300...',
  url: 'https://www.amazon.es/dp/B07PMM4FB2?tag=seominanco-21&linkCode=ogi&th=1&psc=1&keywords=irrigador%20dental'
};
