import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { BuyCta } from './BuyCta';

const Component: ComponentMeta<typeof BuyCta> = {
  title: 'Components/BuyCta',
  component: BuyCta
};

export default Component;

const Template: ComponentStory<typeof BuyCta> = (args) => <BuyCta {...args} />;

export const DefaultTemplate = Template.bind({});
DefaultTemplate.args = {
  size: 'xl',
  url: 'https://www.amazon.es/dp/B07PMM4FB2?tag=seominanco-21&linkCode=ogi&th=1&psc=1&keywords=irrigador%20dental'
};
