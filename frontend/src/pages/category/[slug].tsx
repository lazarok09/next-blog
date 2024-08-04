import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostAndSettings,
} from "../../api/load-posts";
import PostsTemplate from "../../templates/PostsTemplate";

export default function CategoryPage({
  posts,
  setting,
  variables,
}: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  const categoryForThistPost = posts[0].Categories.filter((category) => {
    return category.Slug === router.query.slug;
  });
  const { DisplayName: categoryName } = categoryForThistPost[0];

  return (
    <>
      <Head>
        <title>
          Category {categoryName} - {setting.BlogName}
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
  const variables = { categorySlug: ctx.params.slug as string };
  try {
    data = await loadPosts(variables);
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
      ...defaultLoadPostsVariables,
      ...variables,
    },
    revalidate: 24 * 60 * 60, // 24 hours
  };
};
