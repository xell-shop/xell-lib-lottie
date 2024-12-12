import { Story, Meta } from '@storybook/react';
import { LottieCrearPreferenciaDePago, LottieCrearPreferenciaDePagoProps } from './index';
export default {
  component: LottieCrearPreferenciaDePago,
  title: 'Pages/Lottie/CrearPreferenciaDePago',
} as Meta;

const TemplateCreate: Story<LottieCrearPreferenciaDePagoProps> = (args) => (
  <LottieCrearPreferenciaDePago {...args}></LottieCrearPreferenciaDePago>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
