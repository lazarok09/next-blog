import { ComponentsMenuLink, LogoLinkProps } from "../components/LogoLink";
import { Author } from "../shared-types/Author";
import { Category } from "../shared-types/category";
import { PostStrapi } from "../shared-types/post-strapi";
import { SettingsStrapi } from "../shared-types/settings-strapi";
import { StrapiImage } from "../shared-types/StrapiImage";
import { PostTag } from "../shared-types/Tags";

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

const BASE_URL = "http://localhost:8080";

export type StrapiPostAndSettings = {
  setting: SettingsStrapi;
  posts: PostStrapi[];
  variables?: LoadPostsVariables;
};
export const defaultLoadPostsVariables: LoadPostsVariables = {
  sort: "createdAt:desc",
  start: 0,
  limit: 2,
};
export const loadPosts = async (
  variables: LoadPostsVariables = {}
): Promise<StrapiPostAndSettings> => {
  const [posts, settings, uploadedFiles, tags, categories, authors, links] =
    await Promise.all([
      getPosts(variables),
      getSettings(),
      getUploadedFiles(),
      getTags(),
      getCategories(),
      getAuthors(),
      getLinks(),
    ]);

  // at the graphQL a join was made by the api
  const logoId = settings.Logo as any;

  const logoObj = uploadedFiles.find((file) => file.ID === logoId);

  settings.Logo = logoObj;

  // upload settings menu links

  const settingsMenuLinks = settings.MenuLink.filter((menuLink) => {
    return links.find((link) => link.ID === menuLink.ID);
  });

  settings.MenuLink = settingsMenuLinks;

  posts.forEach((post) => {
    const tagId = post.Tags as any;

    post.Tags = tags.filter((tag) => (tag.ID = tagId));
  });
  posts.forEach((post) => {
    const categoryId = post.Categories as any;

    post.Categories = categories.filter(
      (category) => (category.ID = categoryId)
    );
  });

  posts.forEach((post) => {
    const authorId = post.Author as any;

    post.Author = authors.find((author) => (author.ID = authorId));
  });

  posts.forEach((post) => {
    const coverId: string = post.Cover as any;

    const newCover =
      uploadedFiles.find((file) => file.ID === coverId) || uploadedFiles[0];
    post.Cover = newCover;
  });

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
async function getUploadedFiles(): Promise<StrapiImage[]> {
  const filesUploadedResponse = await fetch(`${BASE_URL}/upload_file`, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });
  const filesUploaded = await filesUploadedResponse.json();
  return filesUploaded;
}
async function getTags(): Promise<PostTag[]> {
  const response = await fetch(`${BASE_URL}/tags`, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });
  const result = await response.json();
  return result;
}
async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${BASE_URL}/categories`, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });
  const result = await response.json();
  return result;
}
async function getAuthors(): Promise<Author[]> {
  const response = await fetch(`${BASE_URL}/authors`, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });
  const result = await response.json();
  return result;
}
async function getLinks(): Promise<ComponentsMenuLink[]> {
  const response = await fetch(`${BASE_URL}/components_menu_menu_links`, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });
  const result = await response.json();
  return result;
}
