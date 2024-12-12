import { Story, Meta } from '@storybook/react';
import { LottieUser, LottieUserProps } from './index';
export default {
  component: LottieUser,
  title: 'Pages/Lottie/User',
} as Meta;

const TemplateCreate: Story<LottieUserProps> = (args) => (
  <LottieUser {...args}></LottieUser>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
