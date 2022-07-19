import config from "../config";
import { request } from "graphql-request";
import { GRAPHQL_QUERY } from "../graphql/queries";
import { PostStrapi } from "../shared-types/post-strapi";
import { SettingsStrapi } from "../shared-types/settings-strapi";

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
  limit: 2,
};
export const loadPosts = async (
  variables: LoadPostsVariables = {}
): Promise<StrapiPostAndSettings> => {
  const data = await request(config.graphQL_URL, GRAPHQL_QUERY, {
    ...defaultLoadPostsVariables,
    ...variables,
  });
  return data;
};
