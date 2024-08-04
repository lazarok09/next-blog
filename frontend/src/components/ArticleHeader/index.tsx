import { StrapiImage } from "../../shared-types/StrapiImage";
import { ArticleMeta, ArticleMetaProps } from "../ArticleMeta";
import { Heading } from "../Heading";
import * as Styled from "./styles";
export type ArticleHeaderProps = {
  ID: string;
  Title: string;
  Excerpt: string;
  Cover: StrapiImage;
} & ArticleMetaProps;

export const ArticleHeader = ({
  Title: title,
  Excerpt: excerpt,
  Cover: cover,
  Author: author,
  Categories: categories,
  CreatedAt: createdAt,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="huge">{title}</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover alt={cover.AlternativeText} src={cover.URL} />
      <ArticleMeta
        Author={author}
        Categories={categories}
        CreatedAt={createdAt}
      />
    </Styled.Wrapper>
  );
};
export default ArticleHeader;
