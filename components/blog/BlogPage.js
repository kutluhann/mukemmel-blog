import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PostList from '../../components/blog/PostList'
import SearchField from '../../components/blog/SearchField'
import Categories from '../../components/blog/Categories'

const BlogPage = ({ posts, categories, isFirst, hasMore }) => {
  const { query } = useRouter()
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
              <div className="w-full flex justify-center items-center">
                {!isFirst &&
                 <Link href={query.page == 2 ? '/' : '/page/[page]'} as={query.page == 2 ? '/' : `/page/${query.page - 1}`}>
                   <a className={`block flex p-4 touch:p-3 shadow rounded-10 w-full justify-center items-center ${hasMore ? 'mr-3 touch:mr-2' : ''}`}>
                     <svg className="h-6 touch:h-5 text-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <line x1="19" y1="12" x2="5" y2="12"></line>
                       <polyline points="12 19 5 12 12 5"></polyline>
                     </svg>
                     <span className="ml-1 font-bold touch:text-8 text-link">Önceki Sayfa</span>
                   </a>
                 </Link>
               }
               {hasMore &&
                 <Link href="/page/[page]" as={`/page/${isFirst ? 2 : +query.page + 1}`}>
                   <a className={`block flex p-4 touch:p-3 shadow rounded-10 w-full justify-center items-center ${!isFirst ? 'ml-3 touch:mr-2' : ''}`}>
                     <span className="mr-1 font-bold touch:text-8 text-link">Sonraki Sayfa</span>
                     <svg className="h-6 touch:h-5 text-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <line x1="5" y1="12" x2="19" y2="12"></line>
                       <polyline points="12 5 19 12 12 19"></polyline>
                     </svg>
                   </a>
                 </Link>
               }
             </div>
            </div>
            <aside className="w-1/3 touch:w-full desktop:mx-3 touch:mb-2 h-auto">
              <div className="sticky top-6 w-full flex flex-col justify-satart items-center touch:flex-col-reverse">
                <SearchField passSearchValue={getSearchVal} categorySlug={query.categorySlug} categories={categories} />
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