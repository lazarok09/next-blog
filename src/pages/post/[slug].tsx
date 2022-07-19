import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { loadPosts, StrapiPostAndSettings } from "../../api/load-posts";
import PostTemplate from "../../templates/PostTemplate";

export default function PostPage({ posts, setting }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  const post = posts[0];
  return (
    <>
      <Head>
        <title>
          {post.title} - {setting.blogName}
        </title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostTemplate settings={setting} post={post} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data: StrapiPostAndSettings | null = null;
  let paths = [];
  try {
    // load only 10 first posts
    data = await loadPosts();
    paths = data.posts.map((post) => ({
      params: { slug: post.slug },
    }));
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (
  ctx
) => {
  let data = null;

  try {
    data = await loadPosts({ postSlug: ctx.params.slug as string });
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
    },
    revalidate: 24 * 60 * 60, // 24 hour,
  };
};
