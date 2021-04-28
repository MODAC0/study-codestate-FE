import React from 'react';

import { Modal } from './Modal';

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

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Modal'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Modal'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Modal'
};
