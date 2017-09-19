import React from "react";
import NewPostForm from "./NewPostForm";
import PropTypes from "prop-types";

class NewPostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formIsVisibleOnPage: false};
    this.handleDisplayingNewPostForm = this.handleDisplayingNewPostForm.bind(this);

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
        onNewPostCreation= {this.props.onNewPostCreation}/>
    } else {
       formAreaContent = <button onClick={this.handleDisplayingNewPostForm.bind(this)}>New Post</button>;
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
