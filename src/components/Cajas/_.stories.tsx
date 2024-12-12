import { Story, Meta } from '@storybook/react';
import { LottieCajas, LottieCajasProps } from './index';
export default {
  component: LottieCajas,
  title: 'Pages/Lottie/Cajas',
} as Meta;

const TemplateCreate: Story<LottieCajasProps> = (args) => (
  <LottieCajas {...args}></LottieCajas>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
