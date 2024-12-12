import { Story, Meta } from '@storybook/react';
import { LottieBodegas, LottieBodegasProps } from './index';
export default {
  component: LottieBodegas,
  title: 'Pages/Lottie/Bodegas',
} as Meta;

const TemplateCreate: Story<LottieBodegasProps> = (args) => (
  <LottieBodegas {...args}></LottieBodegas>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
