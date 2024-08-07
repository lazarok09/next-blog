import Link from "next/link";
import { PostTag } from "../../shared-types/Tags";
import * as Styled from "./styles";

export type PostTagsProps = {
  tags?: PostTag[];
};

export const PostTags = ({ tags = [] }: PostTagsProps) => {
  if (tags.length === 0) {
    return null;
  }
  return (
    <Styled.Wrapper>
      tags: {` `}
      {tags.map((tag) => {
        return (
          <span key={tag.ID}>
            <Link href={`/tag/${tag.Slug}`}>
              <a>{tag.DisplayName}</a>
            </Link>
          </span>
        );
      })}
    </Styled.Wrapper>
  );
};
