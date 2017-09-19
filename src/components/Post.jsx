import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function Post(props){
  return (
    <div>
      <h3>{props.title} by {props.userName}</h3>
      <p>{props.content}</p>
      <p>Today's date: {props.date}</p>
      <hr/>
    </div>
  );
}


Post.propTypes = {
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string
};

export default Post;
