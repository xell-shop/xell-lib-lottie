import { Story, Meta } from '@storybook/react';
import { LottieMigracionDeDatos, LottieMigracionDeDatosProps } from './index';
export default {
  component: LottieMigracionDeDatos,
  title: 'Pages/Lottie/MigracionDeDatos',
} as Meta;

const TemplateCreate: Story<LottieMigracionDeDatosProps> = (args) => (
  <LottieMigracionDeDatos {...args}></LottieMigracionDeDatos>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
