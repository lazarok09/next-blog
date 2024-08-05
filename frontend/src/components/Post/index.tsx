import { ArticleHeader, ArticleHeaderProps } from "../ArticleHeader";
import { HtmlContent } from "../HtmlContent";
import { PostContainer } from "../PostContainer";
import * as Styled from "./styles";

export type PostProps = ArticleHeaderProps & {
  Content: string;
};

export const Post = ({
  Title: title,
  Author: author,
  Categories: categories,
  Content: content,
  Cover: cover,
  CreatedAt: createdAt,
  Excerpt: excerpt,
  ID: id,
}: PostProps) => {
  console.log("🚀 ~ Content:", content)
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader
          Author={author}
          Categories={categories}
          Title={title}
          Excerpt={excerpt}
          ID={id}
          Cover={cover}
          CreatedAt={createdAt}
        />
        <PostContainer size="content">
          <HtmlContent html={content} />
        </PostContainer>
      </PostContainer>
    </Styled.Wrapper>
  );
};
