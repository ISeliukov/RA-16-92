import { Routes, Route } from "react-router-dom";
import { HomePage } from "./engine/Home.js";
import { NewPost } from "./engine/New.js";
import { ViewPost } from "./engine/View.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/new" element={<NewPost />} />
      <Route path="/posts/:postId" element={<ViewPost />} />
    </Routes>
  );
};

export { App };
