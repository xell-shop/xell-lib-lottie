import { Story, Meta } from '@storybook/react';
import { LottieEnvios2, LottieEnvios2Props } from './index';
export default {
  component: LottieEnvios2,
  title: 'Pages/Lottie/Envios2',
} as Meta;

const TemplateCreate: Story<LottieEnvios2Props> = (args) => (
  <LottieEnvios2 {...args}></LottieEnvios2>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
