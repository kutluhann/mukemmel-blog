import { getPosts } from "../../../src/blog";

const posts = getPosts();

export default (req, res) => {
  res.json({
    post: posts.find(post => post.slug === req.query.slug)
  });
};
