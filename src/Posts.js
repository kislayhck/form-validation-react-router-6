import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const load = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(data.data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleView = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <>
      <h2>All Posts</h2>
      {posts.map((item) => (
        <div
          style={{ border: "1px solid", marginTop: "10px", padding: "10px" }}
        >
          <p>{item.title}</p>
          <button onClick={() => handleView(item.id)}>View</button>
        </div>
      ))}
    </>
  );
};

export default User;
