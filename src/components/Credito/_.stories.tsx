import { Story, Meta } from '@storybook/react';
import { LottieCredito, LottieCreditoProps } from './index';
export default {
  component: LottieCredito,
  title: 'Pages/Lottie/Credito',
} as Meta;

const TemplateCreate: Story<LottieCreditoProps> = (args) => (
  <LottieCredito {...args}></LottieCredito>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
