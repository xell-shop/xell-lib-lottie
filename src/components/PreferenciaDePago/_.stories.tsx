import { Story, Meta } from '@storybook/react';
import { LottiePreferenciaDePago, LottiePreferenciaDePagoProps } from './index';
export default {
  component: LottiePreferenciaDePago,
  title: 'Pages/Lottie/PreferenciaDePago',
} as Meta;

const TemplateCreate: Story<LottiePreferenciaDePagoProps> = (args) => (
  <LottiePreferenciaDePago {...args}></LottiePreferenciaDePago>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
