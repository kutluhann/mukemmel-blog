import { getPosts } from "../../src/blog";

const posts = getPosts();

export default async (req, res) => {
  res.json({ posts });
};
