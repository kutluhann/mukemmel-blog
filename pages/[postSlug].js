import React from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./../components/blog/CodeBlock";
import Error from "./_error";

const BlogPost = ({ post, statusCode }) => {
  const { asPath } = useRouter()
  if (statusCode === 404) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <div>
      <Head>
        <title>{post.title} – kutluhann.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-12">
        <section>
          <article className="mx-auto w-full flex flex-col">
            <header className="flex flex-row touch:flex-col w-full mx-auto mb-4">
              <div className={`w-1/2 touch:w-full mx-auto flex justify-center items-center touch:px-6 ${post.image ? 'desktop:p-6' : ''}`}>
                <div className={`w-120 touch:w-full flex flex-col justify-center items-start ${post.image ? 'ml-auto' : ''}`}>
                  <div className="flex justify-start items-center w-full">
                    <span className="text-8 text-gray-600 flex justify-center items-center">
                      <span className="h-3 w-3 flex justify-center items-center">
                        <span style={{backgroundColor: post.category.color}} className="w-2 h-2 rounded-sm"></span>
                      </span>
                      <span className="ml-2">{post.category.name}</span>
                    </span>
                    <span className="mx-2">&#8211;</span>
                    <span className="text-8 text-gray-600 flex justify-center items-center">
                      <span>{post.date}</span>
                    </span>
                  </div>
                  <h1 className="title text-3 my-1 w-full break-word">{post.title}</h1>
                  {post.description &&
                    <p className="text-7 text-gray-600">{post.description}</p>
                  }
                </div>
              </div>
              {post.image && 
                <div className="w-1/2 touch:w-full touch:mt-4">
                  <img alt={post.title} src={post.image} className="object-cover h-full w-full rounded-l-10 touch:rounded-none"></img>
                </div>
              }
            </header>
            <div className="blog-content mx-auto w-full desktop:w-180 py-2 desktop:p-4 touch:px-6">
              <ReactMarkdown 
                source={post.details}
                renderers={{
                  code: CodeBlock
                }}
              ></ReactMarkdown>
            </div>
          </article>
          <div className="mx-auto w-full desktop:w-180 py-2 desktop:p-4 touch:px-6">
            <div className="w-full flex flex-row-reverse justify-between items-center py-2 text-gray-500">
              <p className="font-bold touch:text-8">
                Katkı Yap
              </p>
              <p className="font-bold touch:text-8">
                Arkadaşlarınla Paylaş
              </p>
            </div>
            <div className="w-full border-t-2 flex flex-row-reverse justify-between items-center py-2 text-gray-500">
                <div className="flex justify-center items-center">
                  <a href={`https://github.com/kutluhann/mukemmel-blog/tree/master/src/posts/${post.slug}.md`} target="_blank" aria-label="github" className="cursor-pointer hover:text-github transition-rotate flex justify-center items-center" rel="noopener">
                    <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a href={`https://mobile.twitter.com/intent/tweet?text=${post.title}&url=http://localhost${asPath}`} target="_blank" aria-label="twitter" className="cursor-pointer mx-1 hover:text-twitter  transition-rotate" rel="noopener">
                    <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=http://localhost${asPath}&t=${post.title}`} target="_blank" aria-label="facebook" className="cursor-pointer mx-1 hover:text-facebook  transition-rotate" rel="noopener">
                    <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postSlug}`);
  const json = await res.json();
  return {
    post: json.post,
    statusCode: json.post ? 200 : 404
  };
};

export default BlogPost;