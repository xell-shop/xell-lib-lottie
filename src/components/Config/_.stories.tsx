import { Story, Meta } from '@storybook/react';
import { LottieConfig, LottieConfigProps } from './index';
export default {
  component: LottieConfig,
  title: 'Pages/Lottie/Config',
} as Meta;

const TemplateCreate: Story<LottieConfigProps> = (args) => (
  <LottieConfig {...args}></LottieConfig>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
