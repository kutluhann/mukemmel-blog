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