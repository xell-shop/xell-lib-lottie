import { Story, Meta } from '@storybook/react';
import { LottieLogin, LottieLoginProps } from './index';
export default {
  component: LottieLogin,
  title: 'Pages/Lottie/Login',
} as Meta;

const TemplateCreate: Story<LottieLoginProps> = (args) => (
  <LottieLogin {...args}></LottieLogin>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
