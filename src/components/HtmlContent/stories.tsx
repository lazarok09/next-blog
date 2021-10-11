import { Meta, Story } from '@storybook/react/types-6-0';
import { HtmlContent, HtmlContentProps } from '.';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: `Lorem ipsum dolor sit amet consectetur
     adipisicing elit. Quasi sed nesciunt harum incidunt
     architecto voluptate, eaque libero molestias,
     minima tempore veritatis. Optio, nulla. Provident enim tenetur maxime es
     t ex. Consequatur!`,
  },
} as Meta;

export const Template: Story<HtmlContentProps> = (args) => {
  return (
    <div>
      <HtmlContent {...args} />
    </div>
  );
};
