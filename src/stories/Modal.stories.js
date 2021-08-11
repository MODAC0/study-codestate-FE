import React from 'react';

import { Modal } from '../components/BareMinimumRequirements/Modal';

export default {
  title: 'Example/Modal',
  component: Modal
};

const Template = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Modal'
};
