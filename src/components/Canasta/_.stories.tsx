import { Story, Meta } from '@storybook/react';
import { LottieCanasta, LottieCanastaProps } from './index';
export default {
  component: LottieCanasta,
  title: 'Pages/Lottie/Canasta',
} as Meta;

const TemplateCreate: Story<LottieCanastaProps> = (args) => (
  <LottieCanasta {...args}></LottieCanasta>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
