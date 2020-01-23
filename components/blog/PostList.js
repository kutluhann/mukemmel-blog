import Post from './Post'

const PostList = (props) => {
  const { posts } = props
  return (
    <div>
      {posts.length ? (
        (posts.map((post, index) => (
          <Post post={post} key={index} />
        )))
      ) : (
        <p className="title">Opps.. Maalesef Arama Sonucu Bulunamadı!</p>
      )
      }
    </div>
  )
}

export default PostList