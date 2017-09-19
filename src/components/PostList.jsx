import React from "react";
import Post from "./Post";
import PropTypes from 'prop-types';

function PostList(props){
  return (
    <div>
      {props.postList.map((post, index) =>
        <Post
          userName={post.userName}
          title={post.title}
          content={post.content}
          date={post.date}
          key={index}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
