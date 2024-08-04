import { PostProps } from ".";
import { data } from "../../api/data.json";

const { title, excerpt, cover, content, author, categories, createdAt } =
  data.posts[0];

export default {
  Title: title,
  Excerpt: excerpt,
  Cover: cover,
  Content: content,
  Author: author,
  Categories: categories,
  CreatedAt: createdAt,
} as PostProps;
