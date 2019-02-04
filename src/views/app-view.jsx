import React, { Component } from "react";
import "./styles/app-view.scss";
import OpenButton from "../components/open-button.jsx";
import Modal from "../components/modal.jsx";

class AppView extends Component {
  constructor(props) {
    super(props);
    this.handleModalState = this.handleModalState.bind(this);
    this.state = {
      showModal: false,
    }
  }

  handleModalState() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  ConditionalModal() {
    if (this.state.showModal === true) {
      return (
        <Modal 
          handleModalState={this.handleModalState}
        />
      )
    }
  }

  render() {
    return (
      <div className="app-view">
        {this.ConditionalModal()}
        <OpenButton onClick={() => this.handleModalState()}/>
      </div>
    );
  }
}

export default AppView;
