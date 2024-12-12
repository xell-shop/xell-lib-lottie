import { Story, Meta } from '@storybook/react';
import { LottieDatafono, LottieDatafonoProps } from './index';
export default {
  component: LottieDatafono,
  title: 'Pages/Lottie/Datafono',
} as Meta;

const TemplateCreate: Story<LottieDatafonoProps> = (args) => (
  <LottieDatafono {...args}></LottieDatafono>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
