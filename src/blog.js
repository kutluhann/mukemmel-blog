import { postList } from './postList'
import { categoryList } from './categoryList'

export const getCategories = () => categoryList.reduce((groups, category) => {
  const postCount = postList.filter(post => post.category == category.slug).length || 0
  if(postCount > 0)
    groups.push({...category, postCount: postCount})
  return groups
}, [])

export const getPosts = () => postList.map(post => {
  const categoryDetail = categoryList.find(category => category.slug == post.category)
  return {...post, category: categoryDetail}
})

export const paginate = (posts, currentPage = 1) => {
  let perPage = 5
  let totalPosts = posts.length
  let totalPages = Math.ceil(totalPosts / perPage)
  currentPage = currentPage < 1 ? 1 : currentPage > totalPages ? totalPages : currentPage
  let startIndex = (perPage * currentPage) - perPage
  let endIndex = (perPage * currentPage)
  let remainingPostCount = totalPosts - perPage * currentPage

  let paginatedPost = posts.slice(startIndex, endIndex)
  let isFirst = currentPage == 1
  let hasMore = totalPosts <= perPage ? false : remainingPostCount <= 0 ? false : true
  
  return {
    paginationDetail: {
      isFirst,
      hasMore
    },
    paginatedPost
  }
}