import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostAndSettings,
} from "../../api/load-posts";
import PostsTemplate from "../../templates/PostsTemplate";

export default function TagPage({
  posts,
  setting,
  variables,
}: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  const tagsForThisPost = posts[0].Tags.filter((tag) => {
    return tag.Slug === router.query.slug;
  });
  const { DisplayName: tagName } = tagsForThisPost[0];

  return (
    <>
      <Head>
        <title>
          Tag {tagName} - {setting.BlogName}
        </title>
        <meta name="description" content={setting.BlogDescription} />
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (
  ctx
) => {
  let data = null;
  const variables = { tagSlug: ctx?.params?.slug as string };
  try {
    data = await loadPosts(variables);

    data.posts = data.posts.filter((post) => {
      if (post.Tags.filter((tag) => tag.Slug === ctx?.params?.slug)?.length) {
        return true;
      }
      return false;
    });
  } catch (e) {
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
        ...variables,
      },
    },
    revalidate: 24 * 60 * 60, // 24 hours
  };
};
