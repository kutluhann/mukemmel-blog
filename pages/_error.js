import Head from "next/head";
import Link from 'next/link'

const Error = ({ statusCode }) => (
  <div>
    <Head>
      <title>Sayfa Bulunamadı – kutluhann.net</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="pt-12 px-6">
      <section>
        <div className="container flex flex-col items-center">
          {statusCode === 404 ? (
            <div>
              <h1 className="title text-1 mb-2 text-center">404</h1>
              <h2 className="title text-3 mb-4 text-center">Sayfa Bulunamadı!</h2>
            </div>
          ) : (
            <div>
              <h1 className="title text-1 mb-2 text-center">:(</h1>
              <h2 className="title text-3 mb-4 text-center">Bir Hata Meydana Geldi!</h2>
            </div>
          )}
          <Link href="/">
            <a className="text-link hover:text-secondary text-8 flex justify-center items-center cursor-pointer transition-text">
              <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span className="ml-1">Anasayfaya Dön</span>
            </a>
          </Link>
        </div>
      </section>
    </main>
  </div>
)

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error