const categoryList = [
  {
    slug: 'javascript',
    name: 'JavaScript',
    color: '#f7df1e',
  },
  {
    slug: 'vuejs',
    name: 'Vue.js',
    color: '#42b883',
  },
  {
    slug: 'css',
    name: 'CSS',
    colors: '#2965f1',
  },
  
  {
    slug: 'html',
    name: 'HTML',
    color: '#e34f26',
  },
]

const postList = [
  {
    title: 'Birinci Yazı!',
    slug: 'birinci-yazi',
    category: 'javascript',
    details: require('./posts/birinci-yazi.md').default,
    date: '22 Ocak 2020'
  }
]

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