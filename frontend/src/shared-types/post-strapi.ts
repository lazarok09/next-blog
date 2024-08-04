import { PostProps } from "../components/Post";
import { PostTag } from "./Tags";

export type PostStrapi = PostProps & {
  Tags: PostTag[];
  Slug: string;
  AllowComments: boolean;
};
