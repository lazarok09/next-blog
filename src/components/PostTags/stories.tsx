import { PostTags, PostTagsProps } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';
import mock from './mock';

export default {
  title: 'PostTags',
  component: PostTags,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PostTagsProps>;

export const Template: Story<PostTagsProps> = (args) => {
  return (
    <div style={{ padding: '0 2.4rem' }}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ullam
        atque voluptas accusamus nulla consectetur blanditiis ducimus distinctio
        dicta tenetur, perferendis, aperiam voluptatum quisquam quo quaerat
        vero, dolore quae voluptatem.
      </p>
      <PostTags {...args} />
    </div>
  );
};
export const NoTags: Story<PostTagsProps> = (args) => {
  return (
    <div style={{ padding: '0 2.4rem' }}>
      <p>No Tags here</p>
      <PostTags {...args} tags={undefined} />
    </div>
  );
};
