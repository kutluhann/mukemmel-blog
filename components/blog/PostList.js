import Post from './Post'

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.length > 0 && (
        (posts.map((post, index) => (
          <Post post={post} key={index} />
        )))
      )}
    </div>
  )
}

export default PostList