import { PostProps } from '../components/Post';
import { PostTag } from './Tags';

export type PostStrapi = PostProps & {
  tags: PostTag[];
  slug: string;
};
