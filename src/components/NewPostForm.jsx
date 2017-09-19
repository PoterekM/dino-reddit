import React from "react";
import Post from "../models/Post.js";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import c from './../constants';

class NewPostForm extends React.Component {

  constructor(props){
    super(props);
    console.log(props)
    this.handleNewPostFormSubmission = this.handleNewPostFormSubmission.bind(this);
  }

  handleNewPostFormSubmission(event) {
  event.preventDefault()
  const { _userName, _title, _content } = this.refs;
  const { dispatch } = this.props;
  const action = {
    type: c.ADD_POST,
    id: null,
    userName: _userName.value,
    title: _title.value,
    content: _content.value,
    timeOpened: new Date().getTime()
  }
  dispatch(action);
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

NewPostForm = connect()(NewPostForm);
export default NewPostForm;
