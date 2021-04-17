import axios from "axios";
import { useEffect, useState } from "react";
import Posts from "./component/Posts";
import Pagination from "./component/Pagination";
import "./styles.css";

export default function App() {
  const [post, setPost] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [postPerPage, setPostPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPost(response.data);
    setLoading(false);
    console.log(post);
  };

  //Get current post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <Posts Posts={currentPost} loading={isloading} />
      <Pagination
        postPerPage={postPerPage}
        totalPage={post.length}
        paginate={paginate}
      />
    </div>
  );
}
