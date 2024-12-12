import { Story, Meta } from '@storybook/react';
import { LottieClientes, LottieClientesProps } from './index';
export default {
  component: LottieClientes,
  title: 'Pages/Lottie/Clientes',
} as Meta;

const TemplateCreate: Story<LottieClientesProps> = (args) => (
  <LottieClientes {...args}></LottieClientes>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
