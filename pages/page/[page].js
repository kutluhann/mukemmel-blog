import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import BlogPage from '../../components/blog/BlogPage'

const Page = ({ posts, categories, isFirst, hasMore }) => (
  <BlogPage posts={posts} categories={categories} isFirst={isFirst} hasMore={hasMore}></BlogPage>
);

Page.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/posts?page=${query.page}`);
  const json = await res.json();
  const { isFirst, hasMore } = json.paginationDetail
  return { 
    posts: json.posts,
    categories: json.categories,
    isFirst,
    hasMore
  };
};

export default Page;