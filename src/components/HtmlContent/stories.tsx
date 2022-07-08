import { Meta, Story } from '@storybook/react/types-6-0';
import { HtmlContent, HtmlContentProps } from '.';
import mock from './mock';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: mock,
  },
} as Meta;
export const Template: Story<HtmlContentProps> = (args) => {
  return (
    <div>
      <HtmlContent {...args} />
    </div>
  );
};
