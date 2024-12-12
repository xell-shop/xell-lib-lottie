import { Story, Meta } from '@storybook/react';
import { LottieCrearCuentaBancaria, LottieCrearCuentaBancariaProps } from './index';
export default {
  component: LottieCrearCuentaBancaria,
  title: 'Pages/Lottie/CrearCuentaBancaria',
} as Meta;

const TemplateCreate: Story<LottieCrearCuentaBancariaProps> = (args) => (
  <LottieCrearCuentaBancaria {...args}></LottieCrearCuentaBancaria>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
