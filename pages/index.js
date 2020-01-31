import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import BlogPage from '../components/blog/BlogPage'

const Home = ({ posts, categories, isFirst, hasMore }) => (
  <div>
    <Head>
      <title>Blog – kutluhann.net</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <BlogPage posts={posts} categories={categories} isFirst={isFirst} hasMore={hasMore}></BlogPage>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts?page=1");
  const json = await res.json();
  const { isFirst, hasMore } = json.paginationDetail
  return { 
    posts: json.posts,
    categories: json.categories,
    isFirst,
    hasMore
  };
};

export default Home;