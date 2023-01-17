import "./styles.css";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Posts from "./Posts";
import Post from "./Post";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} /> */}
      </Routes>
    </div>
  );
}
