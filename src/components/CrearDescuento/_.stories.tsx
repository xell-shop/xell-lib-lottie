import { Story, Meta } from '@storybook/react';
import { LottieCrearDescuento, LottieCrearDescuentoProps } from './index';
export default {
  component: LottieCrearDescuento,
  title: 'Pages/Lottie/CrearDescuento',
} as Meta;

const TemplateCreate: Story<LottieCrearDescuentoProps> = (args) => (
  <LottieCrearDescuento {...args}></LottieCrearDescuento>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
