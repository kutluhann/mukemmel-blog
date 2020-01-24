import { getPosts, getCategories } from "../../src/blog";

const posts = getPosts();
const categories = getCategories();

export default async (req, res) => {
  res.json({ posts, categories });
};
