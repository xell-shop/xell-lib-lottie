import { Story, Meta } from '@storybook/react';
import { LottieEnvios, LottieEnviosProps } from './index';
export default {
  component: LottieEnvios,
  title: 'Pages/Lottie/Envios',
} as Meta;

const TemplateCreate: Story<LottieEnviosProps> = (args) => (
  <LottieEnvios {...args}></LottieEnvios>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
