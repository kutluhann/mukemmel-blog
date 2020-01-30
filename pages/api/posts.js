import { getPosts, getCategories, paginate } from "../../src/blog";

const posts = getPosts();
const categories = getCategories();

export default async (req, res) => {
  const category = req.query.category
  const page = req.query.page
  const filteredByCategory = category ? posts.filter(post => post.category.slug == category) : posts
  const pagination = paginate(filteredByCategory, page)
  res.json({
    posts: pagination.paginatedPost,
    categories,
    paginationDetail: pagination.paginationDetail
  });
};
