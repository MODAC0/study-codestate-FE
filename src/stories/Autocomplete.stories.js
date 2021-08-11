import React from 'react';

import { Autocomplete } from '../components/AdvancedChallenges/Autocomplete';

export default {
  title: 'Example/Autocomplete',
  component: Autocomplete
};

const Template = (args) => <Autocomplete {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Autocomplete'
};
