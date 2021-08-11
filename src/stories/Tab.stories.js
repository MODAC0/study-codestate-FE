import React from 'react';

import { Tab } from '../components/BareMinimumRequirements/Tab';

export default {
  title: 'Example/Tab',
  component: Tab
};

const Template = (args) => <Tab {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Tab'
};
