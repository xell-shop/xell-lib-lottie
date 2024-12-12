import { Story, Meta } from '@storybook/react';
import { LottieSuccess, LottieSuccessProps } from './index';
export default {
  component: LottieSuccess,
  title: 'Pages/Lottie/Success',
} as Meta;

const TemplateCreate: Story<LottieSuccessProps> = (args) => (
  <LottieSuccess {...args}></LottieSuccess>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
