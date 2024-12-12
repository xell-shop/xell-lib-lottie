import { Story, Meta } from '@storybook/react';
import { LottieTienda, LottieTiendaProps } from './index';
export default {
  component: LottieTienda,
  title: 'Pages/Lottie/Tienda',
} as Meta;

const TemplateCreate: Story<LottieTiendaProps> = (args) => (
  <LottieTienda {...args}></LottieTienda>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
