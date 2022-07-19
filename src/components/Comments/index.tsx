import * as Styled from "./styles";
import { DiscussionEmbed } from "disqus-react";
import config from "../../config";
export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export const Comments = ({ title, allowComments, slug, id }: CommentsProps) => {
  if (!allowComments) return null;

  return (
    <Styled.Wrapper>
      <DiscussionEmbed
        shortname={`${config.url}/post/${slug}`}
        config={{
          url: `/post/${slug}`,
          identifier: id,
          title: title,
          language: "pt_BR",
        }}
      />
    </Styled.Wrapper>
  );
};