import { Meta, Story } from '@storybook/react/types-6-0';
import { GoToTop } from '.';

export default {
  title: 'GoToTop',
  component: GoToTop,
  args: {
    children: 'GoToTop',
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Hi hi hi hi</h1>
      <p>Lorem ipsum dolor sit am</p>
      <h1>Hi hi hi hi</h1>
      <p>Lorem ipsum dolor sit am</p>
      <h1>Hi hi hi hi</h1>
      <p>Lorem ipsum dolor sit am</p>
      <h1>Hi hi hi hi</h1>
      <p>Lorem ipsum dolor sit am</p>
      <h1>Hi hi hi hi</h1>
      <p>Lorem ipsum dolor sit am</p>
      <h1>Hi hi hi hi</h1>
      <p>Lorem ipsum dolor sit am</p>
      <h1>Hi hi hi hi</h1>
      <p>Lorem ipsum dolor sit am</p>
      <h1>Hi hi hi hi</h1>
      <p>Lorem ipsum dolor sit am</p>
      <h1>Hi hi hi hi</h1>
      <p>Lorem ipsum dolor sit am</p>
      <h1>Hi hi hi hi</h1>
      <p>Lorem ipsum dolor sit am</p>
      <GoToTop {...args} />
    </div>
  );
};
