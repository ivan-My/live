import React from "react";
import { connect } from "react-redux";
import { getCourseWorkData } from "../../store/works";
import DocumentTitle from "react-document-title";
import TopBar from "./Topbar";
import List from "./Lists";

@connect(
  state => state.works,
  { getCourseWorkData }
)
class Works extends React.Component {
  render() {
    return (
      <React.Fragment>
        <DocumentTitle title="作品"/>
        <TopBar/>
        <List/>
      </React.Fragment>
    );
  }
}

export default Works;

