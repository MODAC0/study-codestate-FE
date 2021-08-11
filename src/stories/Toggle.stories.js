import React from 'react';

import { Toggle } from '../components/BareMinimumRequirements/Toggle';

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
