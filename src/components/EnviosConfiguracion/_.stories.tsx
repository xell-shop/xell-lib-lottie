import { Story, Meta } from '@storybook/react';
import { LottieEnviosConfiguracion, LottieEnviosConfiguracionProps } from './index';
export default {
  component: LottieEnviosConfiguracion,
  title: 'Pages/Lottie/EnviosConfiguracion',
} as Meta;

const TemplateCreate: Story<LottieEnviosConfiguracionProps> = (args) => (
  <LottieEnviosConfiguracion {...args}></LottieEnviosConfiguracion>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
