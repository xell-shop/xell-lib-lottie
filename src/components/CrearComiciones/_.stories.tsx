import { Story, Meta } from '@storybook/react';
import { LottieCrearComiciones, LottieCrearComicionesProps } from './index';
export default {
  component: LottieCrearComiciones,
  title: 'Pages/Lottie/CrearComiciones',
} as Meta;

const TemplateCreate: Story<LottieCrearComicionesProps> = (args) => (
  <LottieCrearComiciones {...args}></LottieCrearComiciones>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
