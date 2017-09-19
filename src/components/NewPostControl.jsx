import React from "react";
import NewPostForm from "./NewPostForm";
import PropTypes from "prop-types";

class NewPostControl extends React.Component {

  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {formIsVisibleOnPage: false};
  }

  showForm() {
    this.setState({formIsVisibleOnPage: true});
  }

  hideForm() {
    this.setState({formIsVisibleOnPage: false});
  }

    handleDisplayingNewPostForm(event){
      this.setState({formIsVisibleOnPage: true});
     console.log("New ticket button was clicked!");
   }

   render(){
    const formIsVisibleOnPage = this.state.formIsVisibleOnPage;
    let formAreaContent = null;
    if (this.state.formIsVisibleOnPage){
      formAreaContent = <NewPostForm
        onNewPostCreation= {this.props.onNewPostCreation}
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

NewPostControl.propTypes = {
  onNewPostCreation: PropTypes.func
}

export default NewPostControl;
