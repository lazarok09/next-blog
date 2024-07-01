import { Footer, FooterProps } from ".";
import { Meta, Story } from "@storybook/react/types-6-0";
export default {
  title: "Footer",
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://www.linkedin.com/in/lazarok09/">Feito com ❤ por Lázaro Souza</a></p>`,
  },
} as Meta;

export const Template: Story<FooterProps> = (args) => {
  return (
    <div style={{ marginTop: "200px" }}>
      <Footer {...args} />
    </div>
  );
};
