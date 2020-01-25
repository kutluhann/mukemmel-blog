import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import { useRouter } from 'next/router'
import ReactMarkdown from "react-markdown";
import BlogPage from '../../components/blog/BlogPage'

const Category = ({ posts, categories }) => (
  <BlogPage posts={posts} categories={categories}></BlogPage>
)

Category.getInitialProps = async ({ query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { 
    posts: json.posts.filter(post => post.category.slug == query.categorySlug),
    categories: json.categories
  };
};

export default Category;