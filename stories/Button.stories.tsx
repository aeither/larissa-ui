import React from 'react';
import { Meta, Story } from '@storybook/react';
import { QButton, ButtonProps } from '../src/components/button';

import { ColorModeToggleBar } from './ColorMode';
const meta: Meta = {
  title: 'Components/ButtonExample',
  component: QButton,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;
const Template: Story<ButtonProps> = (args) => <QButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  variant: 'solid',
  children: 'My Button 1',
};

export const All = () => (
  <>
    <ColorModeToggleBar />
    <QButton variant="solid">Button</QButton>
    <QButton variant="outline">Button</QButton>
    <QButton variant="ghost">Button</QButton>
    <QButton variant="link">Button</QButton>
    <QButton variant="unstyle">Button</QButton>
  </>
);
// export const Outline = Template.bind({});
// Outline.args = {
//   variant: 'outline',
//   children: 'My Button 1',
// };
// export const Ghost = Template.bind({});
// Ghost.args = {
//   variant: 'ghost',
//   children: 'My Button 1',
// };
