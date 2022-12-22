import Title from "./Title";

export default {
  title: "practice/Title",
  component: Title,
  argTypes: {
    title: { control: "text" },
    textColor: { control: "text" },
  },
};

const Template = (args) => <Title {...args} />;

export const RedTitle = Template.bind({});

RedTitle.args = {
  title: "Red Title",
  textColor: "red",
};

export const BlueTitle = Template.bind({});

BlueTitle.args = {
  title: "Blue Title",
  textColor: "blue",
};

export const StorybookTitle = (args) => {
  return <Title {...args} />;
};
