import { Meta, Story } from "@storybook/react/types-6-0";
import { ArticleMeta, ArticleMetaProps } from ".";
import mock from "./mock";

export default {
  title: "ArticleMeta",
  component: ArticleMeta,
  args: mock,
  argTypes: {
    CreatedAt: {
      control: {
        type: "date",
      },
    },
  },
} as Meta<ArticleMetaProps>;

export const Template: Story<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} />
    </div>
  );
};
export const NoCategories: Story<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} Categories={undefined} />
    </div>
  );
};
export const NoAuthor: Story<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} Author={undefined} />
    </div>
  );
};
export const NoAuthorAndCategories: Story<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} Author={undefined} Categories={undefined} />
    </div>
  );
};
