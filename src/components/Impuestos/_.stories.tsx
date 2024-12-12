import { Story, Meta } from '@storybook/react';
import { LottieImpuestos, LottieImpuestosProps } from './index';
export default {
  component: LottieImpuestos,
  title: 'Pages/Lottie/Impuestos',
} as Meta;

const TemplateCreate: Story<LottieImpuestosProps> = (args) => (
  <LottieImpuestos {...args}></LottieImpuestos>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
