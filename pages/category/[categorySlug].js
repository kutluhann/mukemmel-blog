import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import BlogPage from '../../components/blog/BlogPage'
import Error from "./../_error";

const Category = ({ posts, categories, statusCode }) => {
  if (statusCode === 404) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <BlogPage posts={posts} categories={categories}></BlogPage>
  )
}

Category.getInitialProps = async ({ query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { 
    posts: json.posts.filter(post => post.category.slug == query.categorySlug),
    categories: json.categories,
    statusCode: json.categories.some(category => category.slug == query.categorySlug) ? 200 : 404
  };
};

export default Category;