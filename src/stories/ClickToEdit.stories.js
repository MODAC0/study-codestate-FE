import React from 'react';
import '../variables.css';
import { ClickToEdit } from '../components/AdvancedChallenges/ClickToEdit';

export default {
  title: 'Example/ClickToEdit',
  component: ClickToEdit
};

const Template = (args) => <ClickToEdit {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'ClickToEdit'
};
