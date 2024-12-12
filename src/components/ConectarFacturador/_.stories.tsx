import { Story, Meta } from '@storybook/react';
import { LottieConectarFacturador, LottieConectarFacturadorProps } from './index';
export default {
  component: LottieConectarFacturador,
  title: 'Pages/Lottie/ConectarFacturador',
} as Meta;

const TemplateCreate: Story<LottieConectarFacturadorProps> = (args) => (
  <LottieConectarFacturador {...args}></LottieConectarFacturador>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
