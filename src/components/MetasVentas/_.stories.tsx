import { Story, Meta } from '@storybook/react';
import { LottieMetasVentas, LottieMetasVentasProps } from './index';
export default {
  component: LottieMetasVentas,
  title: 'Pages/Lottie/MetasVentas',
} as Meta;

const TemplateCreate: Story<LottieMetasVentasProps> = (args) => (
  <LottieMetasVentas {...args}></LottieMetasVentas>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
