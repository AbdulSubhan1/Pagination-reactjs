const Posts = ({ Posts, loading }) => {
  if (loading) {
    return <h2>loading......</h2>;
  } else {
    return (
      <ul className="list-group mb-4">
        {Posts.map((post) => {
          return (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          );
        })}
      </ul>
    );
  }
};

export default Posts;
