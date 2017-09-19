import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function Post(props){
  var time = props.date.format("MMM Do 'YY, h:mm:ss a")
  return (
    <div>
      <h3>{props.title} by {props.userName}</h3>
      <p>{props.content}</p>
      <p>Posted: {time}</p>
      <hr/>
    </div>
  );
}


Post.propTypes = {
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.object
};

export default Post;
