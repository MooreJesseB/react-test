import React, { Component } from "react";
import "./styles/modal-tab.scss";
import { connect } from "react-redux";
import { setSelectedTab } from "../actions/index";

function mapStateToProps(state) {
  return {
    currentTab: state.currentTab
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: id => dispatch(setSelectedTab(id))
  };
}
class ConnectedModalTab extends Component {
  componentDidMount() {
    this.checkForFocus()
  }

  checkForFocus() {
    if (this.props.value === this.props.currentTab) {
      this.textInput.focus(); 
    }
  }

  onFocus() {
    this.props.setSelectedTab(this.props.value);
  }

  render() {
    return <textarea 
      className="tab-body"
      ref={input => this.textInput = input}
      onFocus={() => this.onFocus()}
    />
  }
  
}

const ModalTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedModalTab);

export default ModalTab;
