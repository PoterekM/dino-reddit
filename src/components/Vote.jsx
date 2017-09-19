import React from "react";
import PropTypes from 'prop-types';

function Vote(props){
  console.log(props);
  return (
    <div>
      <p>vote total: {props.voteTotal}</p>
      <button onClick={() => {votePositive()}}>Vote Up</button>
      <button onClick={() => {console.log('goodbye')}}>Vote Down</button>
    </div>
  );
}

Vote.propTypes = {
  voteTotal: PropTypes.number
};


export default Vote;
