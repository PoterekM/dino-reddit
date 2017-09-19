import React from "react";
import Post from "../models/Post.js";
import PropTypes from "prop-types";

class NewPostForm extends React.Component {

  constructor(props){
    super(props);
    this.handleNewPostFormSubmission = this.handleNewPostFormSubmission.bind(this);
  }

  handleNewPostFormSubmission(event) {
  event.preventDefault()
  const { _userName, _title, _content } = this.refs;
  var newPost = new Post(_userName.value, _title.value, _content.value);
  this.props.onNewPostCreation(newPost);
  this.props.hideFormAfterSubmission();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewPostFormSubmission}>
          <input
            ref="_userName"
            type="text"
            id="userName"
            placeholder="Enter User Name"/>
          <input
            ref="_title"
            type="text"
            id="title"
            placeholder="Enter Post Title"/>
          <textarea
            ref="_content"
            id="content"
            placeholder="What you got to say?"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func

}
export default NewPostForm;
