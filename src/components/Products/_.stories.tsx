import { Story, Meta } from '@storybook/react';
import { LottieProducts, LottieProductsProps } from './index';
export default {
  component: LottieProducts,
  title: 'Pages/Lottie/Products',
} as Meta;

const TemplateCreate: Story<LottieProductsProps> = (args) => (
  <LottieProducts {...args}></LottieProducts>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
