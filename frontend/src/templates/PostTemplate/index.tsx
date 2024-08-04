import Head from "next/head";
import { Comments } from "../../components/Comments";
import { Post } from "../../components/Post";
import { PostTags } from "../../components/PostTags";
import config from "../../config";
import { PostStrapi } from "../../shared-types/post-strapi";
import { SettingsStrapi } from "../../shared-types/settings-strapi";
import { BaseTemplate } from "../Base";
import * as Styled from "./styles";
export type PostTemplateProps = {
  settings: SettingsStrapi;
  post?: PostStrapi;
};
export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  if (!post) return null;

  return (
    <BaseTemplate settings={settings}>
      <Head>
        <title>
          {settings.BlogName} | {post.Title}
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          property="og:image"
          content={encodeURIComponent(post.Cover.URL)}
        />
        <link rel="image_src" href={encodeURIComponent(post.Cover.URL)} />
        <meta
          property="og:title"
          content={`${settings.BlogName} ${post.Title}`}
        />

        <meta property="og:description" content={post.Excerpt} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${config.url}/post/${post.Slug}`} />
        <meta property="og:site_name" content={settings.BlogName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`${config.url}/`} />
        <link rel={"canonical"} href={`${config.url}/post/${post.Slug}`} />

        <meta name="twitter:title" content={`${post.Title}`} />
        <meta name="twitter:description" content={post.Excerpt} />
        <meta
          name="twitter:image"
          content={encodeURIComponent(post.Cover.URL)}
        />
      </Head>
      <Post {...post} />
      <Styled.TagsContainer>
        <PostTags tags={post.Tags} />
      </Styled.TagsContainer>
      <Comments
        title={post.Title}
        slug={post.Slug}
        id={post.ID}
        allowComments={post.AllowComments}
      />
    </BaseTemplate>
  );
};
export default PostTemplate;
