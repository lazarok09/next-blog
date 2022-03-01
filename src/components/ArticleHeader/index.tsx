import { Author } from '../../shared-types/Author';
import { Category } from '../../shared-types/category';
import { StrapiImage } from '../../shared-types/StrapiImage';
import { ArticleMeta } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as Styled from './styles';
export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
  author: Author;
  categories: Category[];
  createdAt: string;
};

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big">{title}</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover alt={cover.alternativeText} src={cover.url} />
      <ArticleMeta
        author={author}
        categories={categories}
        createdAt={createdAt}
      />
    </Styled.Wrapper>
  );
};
export default ArticleHeader;
