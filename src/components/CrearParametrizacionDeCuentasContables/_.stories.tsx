import { Story, Meta } from '@storybook/react';
import { LottieCrearParametrizacionDeCuentasContables, LottieCrearParametrizacionDeCuentasContablesProps } from './index';
export default {
  component: LottieCrearParametrizacionDeCuentasContables,
  title: 'Pages/Lottie/CrearParametrizacionDeCuentasContables',
} as Meta;

const TemplateCreate: Story<LottieCrearParametrizacionDeCuentasContablesProps> = (args) => (
  <LottieCrearParametrizacionDeCuentasContables {...args}></LottieCrearParametrizacionDeCuentasContables>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
