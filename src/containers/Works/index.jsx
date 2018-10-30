import React from "react";
import DocumentTitle from "react-document-title";
import TopBar from "./Topbar";
import Lists from "./Lists";


class Works extends React.Component {
  render() {
    return (
      <React.Fragment>
        <DocumentTitle title="作品" />
        <TopBar />
        <Lists />
      </React.Fragment>
    );
  }
}

export default Works;

