import React from "react";
import PostList from './PostList';
import NewPostControl from './NewPostControl';
import { connect } from "react-redux";

class Forum extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <PostList
          postList = {this.props.masterPostList}/>
        <NewPostControl/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
    return {
      masterPostList : state
    }
}

export default connect(mapStateToProps) (Forum);
