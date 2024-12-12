import { Story, Meta } from '@storybook/react';
import { LottieBase, LottieBaseProps } from './index';
export default {
  component: LottieBase,
  title: 'Pages/Lottie/Base',
} as Meta;

const TemplateCreate: Story<LottieBaseProps> = (args) => (
  <LottieBase {...args}></LottieBase>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
