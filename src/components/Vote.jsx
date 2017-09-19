import React from "react";

function Vote(props){
  return (
    <div>
      <button onClick={() => {console.log('hello')}}>Vote Up</button>
      <button onClick={() => {console.log('goodbye')}}>Vote Down</button>
      <h3>Vote Count: </h3>
    </div>
  );
}

export default Vote;
