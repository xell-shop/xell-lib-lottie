import { Story, Meta } from '@storybook/react';
import { LottieCompras, LottieComprasProps } from './index';
export default {
  component: LottieCompras,
  title: 'Pages/Lottie/Compras',
} as Meta;

const TemplateCreate: Story<LottieComprasProps> = (args) => (
  <LottieCompras {...args}></LottieCompras>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
