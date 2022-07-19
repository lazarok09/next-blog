import { ArticleHeaderProps } from ".";
import api from "../../api/data.json";
const { cover, excerpt, title, author, categories, createdAt, id } =
  api.data.posts[0];
export default {
  id,
  cover,
  excerpt,
  title,
  author,
  categories,
  createdAt,
} as ArticleHeaderProps;
