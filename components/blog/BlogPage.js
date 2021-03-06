import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PostList from '../../components/blog/PostList'
import Pagination from '../../components/blog/Pagination'
import Categories from '../../components/blog/Categories'

const BlogPage = ({ posts, categories, isFirst, hasMore }) => {
  const { query } = useRouter()
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
              <PostList posts={posts} />
              <Pagination page={query.page} categorySlug={query.categorySlug} isFirst={isFirst} hasMore={hasMore} />
            </div>
            <aside className="w-1/3 touch:w-full desktop:mx-3 touch:mb-2 h-auto">
              <div className="sticky top-6 w-full flex flex-col justify-satart items-center touch:flex-col-reverse">
                <Categories categories={categories} categorySlug={query.categorySlug} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogPage