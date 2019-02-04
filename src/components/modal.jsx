import React, { Component } from "react";
import "./styles/modal.scss";
import { connect } from "react-redux";
import { addTab } from "../actions/index";
import { setSelectedTab } from "../actions/index";
import ModalTab from "../components/modal-tab.jsx";
import uuidv1 from "uuid";

function mapStateToProps(state) {
  return {
    tabs: state.tabs,
    currentTab: state.currentTab
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTab: tab => dispatch(addTab(tab)),
    setSelectedTab: id => dispatch(setSelectedTab(id))
  };
}

class ConnectedModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  componentDidMount() {
    this.checkForFocus();
  }

  checkForFocus() {
    if (this.props.currentTab === "body") {
      this.bodyInput.focus();
    }
  }

  handleClick() {
    if (!this.state.hover) {
      this.props.handleModalState();
    }
  }

  handleNewTab() {
    let id = uuidv1();
    this.props.addTab({ id });
    this.props.setSelectedTab(id);
  }

  bodyOnFocus() {
    this.props.setSelectedTab("body");
  }

  render() {
    const tabs = this.props.tabs;
    let renderedTabs;
    if (tabs.length) {
      renderedTabs = tabs.map(item => {
        return (
          <div className="tab-container" key={item.id}>
            <ModalTab value={item.id} />
            <div className="divider" />
          </div>
        );
      });
    }

    return (
      <div
        className={"modal-background " + this.props.hiddenClass}
        onClick={() => this.handleClick()}
      >
        <div className="modal-container">
          <div
            className="modal-main"
            onMouseOver={() => this.setState({ hover: true })}
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
          >
            <div className="modal-tabs">
              <ul className="tab-list">{renderedTabs}</ul>
              <div className="new-tab" onClick={() => this.handleNewTab()}>
                + Add new tab
              </div>
            </div>
            <div className="modal-body">
              <textarea
                className="body-textarea"
                ref={input => (this.bodyInput = input)}
                onFocus={() => this.bodyOnFocus()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Modal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedModal);

export default Modal;
