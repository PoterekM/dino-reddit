import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import c from './../constants';
import Moment from "moment";

class NewPostForm extends React.Component {

  constructor(props){
    super(props);
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
    date: new Moment()
  }
  dispatch(action);
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
  hideFormAfterSubmission: PropTypes.func

}

NewPostForm = connect()(NewPostForm);
export default NewPostForm;
