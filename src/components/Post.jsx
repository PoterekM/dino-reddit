import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <div>
      <h3>{props.title} by {props.userName}</h3>
      <p>{props.content}</p>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Post;
