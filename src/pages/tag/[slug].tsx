import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { loadPosts, StrapiPostAndSettings } from '../../api/load-posts';
import PostsTemplate from '../../templates/PostsTemplate';

export default function TagPage({ posts, setting }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  const tagsForThisPost = posts[0].tags.filter((tag) => {
    return tag.slug === router.query.slug;
  });
  const { displayName: tagName } = tagsForThisPost[0];

  return (
    <>
      <Head>
        <title>
          Tag {tagName} - {setting.blogName}
        </title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} settings={setting} />
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
  ctx,
) => {
  let data = null;

  try {
    data = await loadPosts({ tagSlug: ctx.params.slug as string });
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
