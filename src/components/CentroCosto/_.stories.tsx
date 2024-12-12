import { Story, Meta } from '@storybook/react';
import { LottieCentroCosto, LottieCentroCostoProps } from './index';
export default {
  component: LottieCentroCosto,
  title: 'Pages/Lottie/CentroCosto',
} as Meta;

const TemplateCreate: Story<LottieCentroCostoProps> = (args) => (
  <LottieCentroCosto {...args}></LottieCentroCosto>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
