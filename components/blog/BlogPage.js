import { useState, useEffect } from 'react'
import PostList from '../../components/blog/PostList'
import SearchField from '../../components/blog/SearchField'
import Categories from '../../components/blog/Categories'

const BlogPage = ({ posts, categories }) => {
  const [blogPosts, setBlogPosts] = useState([])
  const [searchVal, setSearchVal] = useState('')
  const getSearchVal = (searchVal) => setSearchVal(searchVal)
  useEffect(() => {
    const result = searchVal.length ? posts.filter(post => post.title.includes(searchVal)) : posts
    setBlogPosts(result)
  }, [searchVal, posts])
  return (
    <main className="pt-12 px-6">
      <section>
        <div className="container">
          <h2 className="title text-2 mb-6 text-center">Blog</h2>
        </div>
      </section>
      <section className="mt-8 touch:mt-6">
        <div className="container flex">
          <div className="flex touch:flex-col-reverse w-full desktop:w-10/12 widescreen:w-9/12 mx-auto">
            <div className="w-2/3 touch:w-full h-12 desktop:mx-3 touch:my-2 h-auto relative">
              <PostList posts={blogPosts} />
            </div>
            <aside className="w-1/3 touch:w-full desktop:mx-3 touch:mb-2 h-auto">
              <div className="sticky top-6 w-full flex flex-col justify-satart items-center touch:flex-col-reverse">
                <SearchField passSearchValue={getSearchVal} />
                <Categories categories={categories} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogPage