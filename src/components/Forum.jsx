import React from "react";
import PostList from './PostList';
import NewPostControl from './NewPostControl';

class Forum extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [],
    };
    this.addNewPostToList = this.addNewPostToList.bind(this);
  }

  addNewPostToList(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
      newMasterPostList.push(newPost);
      this.setState({masterPostList: newMasterPostList});
  }
  render(){
    return (
      <div>
        <PostList
          postList = {this.state.masterPostList}/>
        <NewPostControl onNewPostCreation= {this.addNewPostToList}/>
      </div>
    );
  }
}

export default Forum;
