import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import BlogPage from '../components/blog/BlogPage'

const Home = ({ posts, categories }) => (
  <BlogPage posts={posts} categories={categories}></BlogPage>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { 
    posts: json.posts,
    categories: json.categories
  };
};

export default Home;