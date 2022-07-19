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
  const dsConfig = {
    url: `${config.url}/post/${slug}/`,
    identifier: id,
    title: title,
    language: "pt_BR",
  };
  return (
    <Styled.Wrapper>
      <DiscussionEmbed
        shortname={`"blog-breve-explicacao"`}
        config={dsConfig}
      />
    </Styled.Wrapper>
  );
};
