import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const [post, setPost] = useState([]);

  const { id } = useParams();

  const load = async () => {
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setPost(data.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <h3>Your Post</h3>
      <div style={{ border: "1px solid", marginTop: "10px", padding: "10px" }}>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default Post;
