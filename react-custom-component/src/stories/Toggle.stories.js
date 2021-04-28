import React from 'react';

import { Toggle } from './Toggle';

export default {
  title: 'Example/Toggle',
  component: Toggle
};

const Template = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Toggle'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Toggle'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Toggle'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Toggle'
};
