import React from "react";
import PropTypes from 'prop-types';

function Vote(props){
  console.log(props);

  function votePositive(postId){
    const { dispatch } = props;
    const { action } = {
      type: c.UP_VOTE,
      id: postId
    }
    dispatch(action)
  }
  return (
    <div>
      <p>vote total: {props.voteTotal}</p>
      <button onClick={() => {votePositive(props.post.id)}}>Vote Up</button>
      <button onClick={() => {console.log('goodbye')}}>Vote Down</button>
    </div>
  );
}

Vote.propTypes = {
  voteTotal: PropTypes.number
};


export default Vote;
