import { ArticleHeaderProps } from ".";
import api from "../../api/data.json";
const {
  Author,
  Categories,

  Cover,
  Excerpt,
  ID,

  Title,
  CreatedAt,
} = api.data.posts[0];

export default {
  ID,
  Cover,
  Excerpt,
  Title,
  Author,
  Categories,
  CreatedAt,
} as ArticleHeaderProps;
