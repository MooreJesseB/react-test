import React from "react";
import "./styles/open-button.scss";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  };
}

function ConnectedOpenButton(props) {
  function TabCount() {
    const count = props.tabs.length;
    return <h1 className="count">{count} Tabs</h1>;
  }

  return (
    <>
      <div className="open-button" onClick={() => props.onClick()}>
        Open
      </div>
      <TabCount />
    </>
  );
}

const OpenButton = connect(mapStateToProps)(ConnectedOpenButton);

export default OpenButton;
