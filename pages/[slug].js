import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogPost = ({ post }) => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="hero-title">Selman Kahya</h1>
      <div className="hero-social-links">
        <Link href="https://medium.com/@selmankahya">
          <a className="social-link">Medium</a>
        </Link>
        <Link href="https://www.twitter.com/selmankahyax">
          <a className="social-link">Twitter</a>
        </Link>
        <Link href="https://www.linkedin.com/in/selmankahya">
          <a className="social-link">LinkedIn</a>
        </Link>
        <Link href="https://www.instagram.com/selmankahyax/?hl=en">
          <a className="social-link">Instagram</a>
        </Link>
      </div>
    </div>

    <div className="blog">
      <h2 className="blog-title">
        <Link href="/test">
          <a className="blog-title-link">{post.title}</a>
        </Link>
      </h2>
      <div className="blog-text">
        <ReactMarkdown source={post.details} />
      </div>
      <div className="blog-date">{post.date}</div>
    </div>
    <style jsx>{`
    `}</style>
  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.slug}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;