import { PostProps } from ".";
import { data } from "../../api/data.json";

const {
  Author,
  Categories,
  Content,
  Cover,
  Excerpt,

  Title,
  CreatedAt,
} = data.posts[0];

export default {
  Title,
  Excerpt,
  Cover,
  Content,
  Author,
  Categories,
  CreatedAt,
} as PostProps;
