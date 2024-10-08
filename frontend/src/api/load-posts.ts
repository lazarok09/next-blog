import { PostStrapi } from "../shared-types/post-strapi";
import { SettingsStrapi } from "../shared-types/settings-strapi";

import { BASE_URL, getAuthors, getLinks, getUploadedFiles } from "./services";

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export type StrapiPostAndSettings = {
  setting: SettingsStrapi;
  posts: PostStrapi[];
  variables?: LoadPostsVariables;
};
export const defaultLoadPostsVariables: LoadPostsVariables = {
  sort: "createdAt:desc",
  start: 0,
  limit: 10,
};
export const loadPosts = async (
  variables: LoadPostsVariables = {}
): Promise<StrapiPostAndSettings> => {
  const [posts, settings, uploadedFiles, authors, links] = await Promise.all([
    getPosts(variables),
    getSettings(),
    getUploadedFiles(),
    getAuthors(),
    getLinks(),
  ]);

  // at the graphQL a join was made by the api
  const logoId = settings.Logo as any;

  const logoObj = uploadedFiles.find((file) => file.ID === logoId);

  settings.Logo = logoObj;

  // upload settings menu links
  // @ts-expect-error im gonna fix this soon
  const linksSettings = settings.MenuLink.map((m) => m.Ref);

  const settingsMenuLinks = links.filter((link) => {
    if (linksSettings.includes(link.ID)) {
      return true;
    }
  });
  // @ts-expect-error im gonna fix this soon
  settings.MenuLink = settingsMenuLinks;

  if (posts?.length) {
    posts?.forEach((post) => {
      const authorId = post.Author as any;

      post.Author = authors.find((author) => (author.ID = authorId));
    });

    posts?.forEach((post) => {
      const coverId: string = post.Cover as any;

      const newCover =
        uploadedFiles.find((file) => file.ID === coverId) || uploadedFiles[0];
      post.Cover = newCover;
    });
  }

  return { posts: posts, setting: settings };
};

async function getSettings(): Promise<SettingsStrapi> {
  const responseSettings = await fetch(`${BASE_URL}/settings`, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });
  const settings = await responseSettings.json();
  return settings;
}

async function getPosts(
  variables?: typeof defaultLoadPostsVariables
): Promise<PostStrapi[]> {
  const params = new URLSearchParams();

  if (variables?.postSearch && variables.postSearch.length >= 1) {
    params.append("search", String(variables.postSearch));
  }
  if (variables?.limit && variables.limit >= 1) {
    params.append("limit", String(variables.limit));
  }
  if (variables.start && variables.start >= 1) {
    params.append("offset", String(variables.start));
  }
  const url = new URL(`${BASE_URL}/posts`);

  if (variables?.postSlug?.length) {
    url.pathname += `/${variables.postSlug}`;
  }

  const response = await fetch(`${url.toString()}?${params.toString()}`, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });

  const posts = await response.json();
  return posts;
}
