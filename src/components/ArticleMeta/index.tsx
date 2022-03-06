import { Author } from '../../shared-types/Author';
import { Category } from '../../shared-types/category';
import { formatDate } from '../../utils/formatDate';
import * as Styled from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  author?: Author;
  categories?: Category[];
};

export const ArticleMeta = ({
  createdAt,
  author = undefined,
  categories = [],
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {typeof author != 'undefined' && (
          <>
            <span>Por </span>
            <a href={`/author/${author.slug}`}>{author.displayName}</a>
            <span className={'separetor'}> | </span>
          </>
        )}

        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        {categories.length > 0 && (
          <>
            <span className={'separetor'}> | </span>

            <span className={'categories'}>
              {categories.map((category) => (
                <span key={`article-meta-cat-${category.id}`}>
                  <a href={`/category/${category.slug}`}>
                    {category.displayName}
                  </a>
                </span>
              ))}
            </span>
          </>
        )}
      </p>
    </Styled.Wrapper>
  );
};
