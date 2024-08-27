import { ComponentsMenuLink, LogoLinkProps } from "../components/LogoLink";
import { Author } from "../shared-types/Author";
import { Category } from "../shared-types/category";

import { StrapiImage } from "../shared-types/StrapiImage";
import { PostTag } from "../shared-types/Tags";
import { LoadPostsVariables } from "./load-posts";
export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getUploadedFiles(): Promise<StrapiImage[]> {
  const filesUploadedResponse = await fetch(`${BASE_URL}/upload_file`, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });
  const filesUploaded = await filesUploadedResponse.json();
  return filesUploaded;
}
export async function getTags(
  variables?: LoadPostsVariables
): Promise<PostTag[]> {
  const finalUrl = new URL(`${BASE_URL}/tags`);
  if (variables.tagSlug?.length) {
    finalUrl.pathname += `/${variables.tagSlug}`;
  }

  const response = await fetch(`${finalUrl.toString()}`, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });
  const result = await response.json();
  return result;
}
export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${BASE_URL}/categories`, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });
  const result = await response.json();
  return result;
}
export async function getAuthors(): Promise<Author[]> {
  const response = await fetch(`${BASE_URL}/authors`, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });
  const result = await response.json();
  return result;
}
export async function getLinks(): Promise<ComponentsMenuLink[]> {
  const response = await fetch(`${BASE_URL}/components_menu_menu_links`, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });
  const result = await response.json();
  return result;
}
