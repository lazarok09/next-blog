import { CloneMe, CloneMeProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'CloneMe',
  component: CloneMe,
} as Meta;

export const Template: Story<CloneMeProps> = (args) => {
  return (
    <div>
      <CloneMe {...args} />
    </div>
  );
};
