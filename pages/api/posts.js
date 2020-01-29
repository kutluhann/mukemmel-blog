import { getPosts, getCategories, paginate } from "../../src/blog";

const posts = getPosts();
const categories = getCategories();

export default async (req, res) => {
  const pagination = paginate(posts, req.query.page)
  res.json({
    posts: pagination.paginatedPost,
    categories,
    paginationDetail: pagination.paginationDetail
  });
};
