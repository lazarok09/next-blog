import Head from "next/head";
import { GetStaticProps } from "next";
import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostAndSettings,
} from "../api/load-posts";
import { PostsTemplate } from "../templates/PostsTemplate";

export default function Index({
  posts,
  setting,
  variables,
}: StrapiPostAndSettings) {
  console.log("🚀 ~ setting:", setting);
  return (
    <>
      <Head>
        <title>
          {setting.BlogName} - {setting.BlogDescription}
        </title>
        <meta name="description" content={setting.BlogDescription} />
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
}
export const getStaticProps: GetStaticProps<
  StrapiPostAndSettings
> = async () => {
  let data = null;

  try {
    data = await loadPosts();
    console.log("🚀 ~ >= ~ data:", data)
  } catch (e) {
    console.error("🚀 ~ >= ~ e:", e)
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: {
        ...defaultLoadPostsVariables,
      },
    },
    revalidate: 24 * 60 * 60, // 24 hours
  };
};
