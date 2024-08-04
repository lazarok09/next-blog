import Link from "next/link";
import { Author } from "../../shared-types/Author";
import { Category } from "../../shared-types/category";
import { formatDate } from "../../utils/formatDate";
import * as Styled from "./styles";

export type ArticleMetaProps = {
  CreatedAt: string;
  Author?: Author;
  Categories?: Category[];
};

export const ArticleMeta = ({
  CreatedAt: createdAt,
  Author: author = undefined,
  Categories: categories = [],
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {typeof author != "undefined" && author && (
          <>
            <span>Por </span>
            <Link href={`/author/${author.Slug}`}>
              <a>{author.DisplayName}</a>
            </Link>
            <span className={"separetor"}> | </span>
          </>
        )}

        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        {!!categories && categories.length > 0 && (
          <>
            <span className={"separetor"}> | </span>

            <span className={"categories"}>
              {categories.map((category) => (
                <span key={`article-meta-cat-${category.ID}`}>
                  <Link href={`/category/${category.Slug}`}>
                    <a>{category.DisplayName}</a>
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
