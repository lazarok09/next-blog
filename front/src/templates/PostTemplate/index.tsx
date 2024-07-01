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
          {settings.blogName} | {post.title}
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          property="og:image"
          content={encodeURIComponent(post.cover.url)}
        />
        <link rel="image_src" href={encodeURIComponent(post.cover.url)} />
        <meta
          property="og:title"
          content={`${settings.blogName} ${post.title}`}
        />

        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${config.url}/post/${post.slug}`} />
        <meta property="og:site_name" content={settings.blogName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`${config.url}/`} />
        <link rel={"canonical"} href={`${config.url}/post/${post.slug}`} />

        <meta name="twitter:title" content={`${post.title}`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta
          name="twitter:image"
          content={encodeURIComponent(post.cover.url)}
        />
      </Head>
      <Post {...post} />
      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>
      <Comments
        title={post.title}
        slug={post.slug}
        id={post.id}
        allowComments={post.allowComments}
      />
    </BaseTemplate>
  );
};
export default PostTemplate;
