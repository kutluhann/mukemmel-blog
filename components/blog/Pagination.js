import Link from 'next/link'

const Pagination = ({ page, categorySlug, isFirst, hasMore }) => {
  return (
    <div className="w-full flex justify-center items-center">
      {!isFirst && !categorySlug &&
        <Link href={page == 2 ? '/' : '/page/[page]'} as={page == 2 ? '/' : `/page/${page - 1}`}>
          <a className={`block flex p-4 touch:p-3 shadow rounded-10 w-full justify-center items-center ${hasMore ? 'mr-3 touch:mr-2' : ''}`}>
            <svg className="h-6 touch:h-5 text-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span className="ml-1 font-bold touch:text-8 text-link">Önceki Sayfa</span>
          </a>
        </Link>
      }
      {hasMore && !categorySlug &&
        <Link href="/page/[page]" as={`/page/${isFirst ? 2 : +page + 1}`}>
          <a className={`block flex p-4 touch:p-3 shadow rounded-10 w-full justify-center items-center ${!isFirst ? 'ml-3 touch:mr-2' : ''}`}>
            <span className="mr-1 font-bold touch:text-8 text-link">Sonraki Sayfa</span>
            <svg className="h-6 touch:h-5 text-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </Link>
      }
      {!isFirst && categorySlug &&
        <Link href={page == 2 ? '/category/[categorySlug]' : '/category/[categorySlug]/page/[page]'} as={page == 2 ? `/category/${categorySlug}` : `/category/${categorySlug}/page/${page - 1}`}>
          <a className={`block flex p-4 touch:p-3 shadow rounded-10 w-full justify-center items-center ${hasMore ? 'mr-3 touch:mr-2' : ''}`}>
            <svg className="h-6 touch:h-5 text-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span className="ml-1 font-bold touch:text-8 text-link">Önceki Sayfa</span>
          </a>
        </Link>
      }
      {hasMore && categorySlug &&
        <Link href="/category/[categorySlug]/page/[page]" as={`/category/${categorySlug}/page/${isFirst ? 2 : +page + 1}`}>
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
  )
}

export default Pagination