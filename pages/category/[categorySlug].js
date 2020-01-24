import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Layout from '../../components/Layout'
import PostList from '../../components/blog/PostList'
import SearchField from '../../components/blog/SearchField'
import Categories from '../../components/blog/Categories'

const Category = ({ posts, categories }) => (
  <Layout>
    <main className="pt-12 px-6">
    <section>
      <div className="container">
        <h2 className="title text-2 mb-6 text-center">Category</h2>
      </div>
    </section>
  </main>
  </Layout>
);

Category.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { 
    posts: json.posts,
    categories: json.categories
  };
};

export default Category;