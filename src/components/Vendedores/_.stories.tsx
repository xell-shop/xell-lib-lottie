import { Story, Meta } from '@storybook/react';
import { LottieVendedores, LottieVendedoresProps } from './index';
export default {
  component: LottieVendedores,
  title: 'Pages/Lottie/Vendedores',
} as Meta;

const TemplateCreate: Story<LottieVendedoresProps> = (args) => (
  <LottieVendedores {...args}></LottieVendedores>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
