import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function Post({ post }) {
  const navigate = useNavigate();

  const onView = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div className="post_item" onClick={onView}>
      <div className="item_header">
        <img className="header_img" src="http://via.placeholder.com/30x30" />
        <div className="header_info">
          <label className="header_title">Name</label>
          <div className="header_subtitle">
            <label className="header_desc">Description</label>
             &middot; 
            <label className="header_created">{moment(post.created).fromNow()}</label>
          </div>
        </div>
      </div>
      <div className="item_text">{post.content}</div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

export { Post };
