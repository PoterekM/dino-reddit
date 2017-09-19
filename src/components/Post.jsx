import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function Post(props){
  return (
    <div>
      <h3>{props.title} by {props.userName}</h3>
      <p>{props.content}</p>
      <p>{displayTimeOpen(props.timeOpened)}</p>
      <p>Today's date: {props.date}</p>
      <hr/>
    </div>
  );
}

function displayTimeOpen(timeOpened) {
  let now = new Moment(new Date());
  let then = new Moment(timeOpened);
  let stringTime = then.from(now, true);
  return stringTime;
}

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timeOpened: PropTypes.instanceOf(Date),
  date: PropTypes.string
};

export default Post;
