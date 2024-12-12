import { Story, Meta } from '@storybook/react';
import { LottieCrearMarcas, LottieCrearMarcasProps } from './index';
export default {
  component: LottieCrearMarcas,
  title: 'Pages/Lottie/CrearMarcas',
} as Meta;

const TemplateCreate: Story<LottieCrearMarcasProps> = (args) => (
  <LottieCrearMarcas {...args}></LottieCrearMarcas>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
