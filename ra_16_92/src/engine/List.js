import React from "react";
import PropTypes from "prop-types";
import { Post } from "./Post";

function PostList({ list }) {
  
  return (
    <div className="post_list">
      {list.map((o) => (<Post post={o} key={o.id}/>))}
    </div>
  );
}

PostList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
};

export { PostList };
