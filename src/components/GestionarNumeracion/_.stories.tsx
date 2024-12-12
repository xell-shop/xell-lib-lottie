import { Story, Meta } from '@storybook/react';
import { LottieGestionarNumeracion, LottieGestionarNumeracionProps } from './index';
export default {
  component: LottieGestionarNumeracion,
  title: 'Pages/Lottie/GestionarNumeracion',
} as Meta;

const TemplateCreate: Story<LottieGestionarNumeracionProps> = (args) => (
  <LottieGestionarNumeracion {...args}></LottieGestionarNumeracion>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
