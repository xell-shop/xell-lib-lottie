import { Story, Meta } from '@storybook/react';
import { LottieCrearVentas, LottieCrearVentasProps } from './index';
export default {
  component: LottieCrearVentas,
  title: 'Pages/Lottie/CrearVentas',
} as Meta;

const TemplateCreate: Story<LottieCrearVentasProps> = (args) => (
  <LottieCrearVentas {...args}></LottieCrearVentas>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
