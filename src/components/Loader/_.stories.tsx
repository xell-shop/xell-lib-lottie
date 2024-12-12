import { Story, Meta } from '@storybook/react';
import { LottieLoader, LottieLoaderProps } from './index';
export default {
  component: LottieLoader,
  title: 'Pages/Lottie/Loader',
} as Meta;

const TemplateCreate: Story<LottieLoaderProps> = (args) => (
  <LottieLoader {...args}></LottieLoader>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
