import { Meta, Story } from "@storybook/react/types-6-0";
import { LogoLink, LogoLinkProps } from ".";

export default {
  title: "LogoLink",
  component: LogoLink,
  args: {
    text: "LogoLink",
    srcImage: "assets/images/eu.jpg",
    link: "https://localhost",
    newTab: false,
  },
} as Meta;

export const ImageOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
TextOnly.args = {
  srcImage: "",
};
