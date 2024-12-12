import { Story, Meta } from '@storybook/react';
import { LottieProviders, LottieProvidersProps } from './index';
export default {
  component: LottieProviders,
  title: 'Pages/Lottie/Providers',
} as Meta;

const TemplateCreate: Story<LottieProvidersProps> = (args) => (
  <LottieProviders {...args}></LottieProviders>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
