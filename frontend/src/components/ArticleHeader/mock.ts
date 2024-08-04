import { ArticleHeaderProps } from ".";
import api from "../../api/data.json";
const { cover, excerpt, title, author, categories, createdAt, id } =
  api.data.posts[0];
export default {
  ID: id,
  Cover: cover,
  Excerpt: excerpt,
  Title: title,
  Author: author,
  Categories: categories,
  CreatedAt: createdAt,
} as ArticleHeaderProps;
