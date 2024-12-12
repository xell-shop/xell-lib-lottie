import { Story, Meta } from '@storybook/react';
import { LottieCategory, LottieCategoryProps } from './index';
export default {
  component: LottieCategory,
  title: 'Pages/Lottie/Category',
} as Meta;

const TemplateCreate: Story<LottieCategoryProps> = (args) => (
  <LottieCategory {...args}></LottieCategory>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
