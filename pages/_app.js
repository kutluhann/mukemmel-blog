import React from 'react'
import App from 'next/app'
import Layout from './../components/Layout'

import './../styles/tailwind.css'
import './../styles/blog.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp