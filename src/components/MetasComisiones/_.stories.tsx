import { Story, Meta } from '@storybook/react';
import { LottieMetasComisiones, LottieMetasComisionesProps } from './index';
export default {
  component: LottieMetasComisiones,
  title: 'Pages/Lottie/MetasComisiones',
} as Meta;

const TemplateCreate: Story<LottieMetasComisionesProps> = (args) => (
  <LottieMetasComisiones {...args}></LottieMetasComisiones>
);
export const Index = TemplateCreate.bind({});
Index.args = {};
