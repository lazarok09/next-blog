import Link from 'next/link';
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
            <Link href={`/author/${author.slug}`}>
              <a>{author.displayName}</a>
            </Link>
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
                  <Link href={`/category/${category.slug}`}>
                    <a>{category.displayName}</a>
                  </Link>
                </span>
              ))}
            </span>
          </>
        )}
      </p>
    </Styled.Wrapper>
  );
};
