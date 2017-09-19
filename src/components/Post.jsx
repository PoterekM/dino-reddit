import React from "react";
import PropTypes from "prop-types";
import Vote from "./Vote";

function Post(props){
  var time = props.date.format("MMM Do 'YY, h:mm:ss a")
  return (
    <div>
      <h3>{props.title} by {props.userName}</h3>
      <p>{props.content}</p>
      <p>Posted: {time}</p>
      
      <Vote voteTotal={props.voteTotal}/>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.object,
  voteTotal: PropTypes.number
};

export default Post;
