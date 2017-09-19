import React from "react";
import NewPostForm from "./NewPostForm";
import PropTypes from "prop-types";

class NewPostControl extends React.Component {

  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {
      formIsVisibleOnPage: false
    };
  }

  showForm() {
    this.setState({formIsVisibleOnPage: true});
  }

  hideForm() {
    this.setState({formIsVisibleOnPage: false});
  }

  render(){
    const formIsVisibleOnPage = this.state.formIsVisibleOnPage;
    let formAreaContent = null;
    if (this.state.formIsVisibleOnPage){
      formAreaContent = <NewPostForm
        hideFormAfterSubmission = {this.hideForm}/>
    } else {
      formAreaContent = <button onClick={this.showForm}>New Post</button>;
  }

  return (
    <div>
      {formAreaContent}
    </div>
  );
  }
}

export default NewPostControl;
