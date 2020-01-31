import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import BlogPage from '../../../../components/blog/BlogPage'
import Error from "./../../../_error";

const CategoryPage = ({ posts, categories, isFirst, hasMore, statusCode, currentCategory }) => {
  if (statusCode === 404) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <div>
      <Head>
        <title>{currentCategory.name} – kutluhann.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPage posts={posts} categories={categories} isFirst={isFirst} hasMore={hasMore}></BlogPage>
    </div>
  )
}

CategoryPage.getInitialProps = async ({ query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/posts?category=${query.categorySlug}&page=${query.page}`);
  const json = await res.json();
  const { isFirst, hasMore } = json.paginationDetail
  return { 
    posts: json.posts,
    categories: json.categories,
    isFirst,
    hasMore,
    statusCode: json.categories.some(category => category.slug == query.categorySlug) ? 200 : 404,
    currentCategory: json.categories.find(category => category.slug == query.categorySlug)
  };
};

export default CategoryPage;