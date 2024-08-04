import Link from "next/link";
import { StrapiImage } from "../../shared-types/StrapiImage";
import { Heading } from "../Heading";
import * as Styled from "./styles";

export type PostCardProps = {
  ID: string;
  Title: string;
  Cover: StrapiImage;
  Excerpt: string;
  Slug: string;
};
export const PostCard = ({ Title: title, Cover: cover, Excerpt: excerpt, Slug: slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <a>
          <Styled.Cover src={cover.Url} alt={title} />
        </a>
      </Link>

      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`}>
          <a>{title} </a>
        </Link>
      </Heading>

      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};

export default PostCard;
