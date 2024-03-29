import { Meta, Story } from "@storybook/react/types-6-0";
import PostTemplate, { PostTemplateProps } from ".";
import mock from "./mock";
export default {
  title: "PostTemplate",
  component: PostTemplate,
  args: mock,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "",
    },
  },
} as Meta<PostTemplateProps>;

export const Template: Story<PostTemplateProps> = (args) => {
  return <PostTemplate {...args} />;
};
