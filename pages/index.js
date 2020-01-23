import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Layout from '../components/Layout'
import PostList from '../components/blog/PostList'

const Home = ({ posts }) => (
  <Layout>
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
          </div>
          <aside className="w-1/3 touch:w-full desktop:mx-3 touch:mb-2 h-auto">
            <div className="sticky top-6 w-full flex flex-col justify-satart items-center touch:flex-col-reverse">
              
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
  </Layout>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;