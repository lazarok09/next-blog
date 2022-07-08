import { data } from '../../api/data.json';
import { PostsTemplateProps } from '.';

export default {
  settings: data.setting,
  posts: data.posts,
} as PostsTemplateProps;
