import Link from 'next/link'

const Post = ({ post }) => {
  return (
    <article className="flex rounded-10 shadow mb-6 touch:mb-4">
      {post.image &&
        <div v-if="post.image" className="w-3/12">
          <Link href="/[postSlug]" as={`/${post.slug}`}>
            <a className="cursor-pointer h-full">
              <img alt={post.title} src={post.image} className="object-cover h-full w-full rounded-l-10 hover:opacity-90 transition-opacity"></img>
            </a>
          </Link>
        </div>
      }
      <div className="w-full p-5 touch:p-4 flex flex-col justify-between">
        <header className="flex flex-col">
          <span className="text-8 touch:text-9 text-gray-600 mb-1 flex justify-start items-center">
            <span className="h-2 w-2 flex justify-center items-center">
              <span style={{backgroundColor: post.category.color}} className="w-2 h-2 rounded-sm"></span>
            </span>
            <span className="ml-2">
              {post.category.name}
            </span>
          </span>
          <h3 className="title touch:text-5 mb-2 cursor-pointer">
            <Link href="/[postSlug]" as={`/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </h3>
        </header>
        {post.description &&
          <div>
            <p className="text-7 text-gray-600">{post.description}</p>
          </div>
        }
        <div className="flex justify-between items-center">
          <span className="text-8 touch:text-9 text-gray-600 flex justify-center items-center">
            <span>&#8211;</span>
            <span className="ml-1">{post.date}</span>
          </span>
          <Link href="/[postSlug]" as={`/${post.slug}`}>
            <a className="hover:text-link text-gray-600 text-8 touch:text-9 flex justify-center items-center cursor-pointer transition-text">
              <span className="mr-1">Yazıya git</span>
              <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </article>
  )  
}

export default Post