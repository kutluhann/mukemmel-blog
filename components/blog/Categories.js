import { useRouter } from 'next/router'
import Link from 'next/link'

const Categories = ({ categories }) => {
  const router = useRouter()
  const totalPostCount = categories.reduce((total, category) => {
    return total + category.postCount
  }, 0)
  return (
    <div className="rounded-10 shadow flex justify-center p-5 flex-col w-full">
      <h3 className="title mb-4 flex items-center">
        <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
        <span className="ml-2">Kategoriler</span>
      </h3>
      <ul className="flex flex flex-col items-start justify-center touch:flex-row touch:flex-wrap touch:justify-start">
        <li>
            <Link href="/">
              <a className="group h-8 cursor-pointer py-2 mx-2 text-8 flex justify-center items-center">
                <span className="h-3 w-3 flex justify-center items-center">
                    <span className={`bg-secondary w-2 h-2 rounded-sm group-hover:h-3 group-hover:w-3 transition-size ${!router.query.categorySlug ? 'h-3 w-3' : ''}`} ></span>
                </span>
                <span className="ml-2 text-gray-600">Tüm yazılar / {totalPostCount}</span>
              </a>
            </Link>
          </li>
          {categories.map((category, index) => (
            <li key={index}>
              <Link href="/category/[categorySlug]" as={`/category/${category.slug}`}>
                <a className="group h-8 cursor-pointer py-2 mx-2 text-8 flex justify-center items-center">
                  <span className="h-3 w-3 flex justify-center items-center">
                      <span 
                        style={{backgroundColor: category.color}}
                        className={`bg-secondary w-2 h-2 rounded-sm group-hover:h-3 group-hover:w-3 transition-size ${router.query.categorySlug == category.slug ? 'h-3 w-3' : ''}`} 
                      ></span>
                  </span>
                  <span className="ml-2 text-gray-600">{category.name} / {category.postCount}</span>
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Categories