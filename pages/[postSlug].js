import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./../components/blog/CodeBlock";

const BlogPost = ({ post }) => (
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
    </section>
  </main>
)

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postSlug}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;