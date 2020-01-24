import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import { useRouter } from 'next/router'
import ReactMarkdown from "react-markdown";
import PostList from '../../components/blog/PostList'
import SearchField from '../../components/blog/SearchField'
import Categories from '../../components/blog/Categories'

const Category = ({ posts, categories }) => {
  const { query } = useRouter()
  return (
    <main className="pt-12 px-6">
      <section>
        <div className="container">
          <h2 className="title text-2 mb-6 text-center">Category {query.categorySlug}</h2>
        </div>
      </section>
    </main>
  )
};

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