import { Story, Meta } from '@storybook/react';
import { LottieError, LottieErrorProps } from './index';
export default {
  component: LottieError,
  title: 'Pages/Lottie/Error',
} as Meta;

const TemplateCreate: Story<LottieErrorProps> = (args) => (
  <LottieError {...args}></LottieError>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
