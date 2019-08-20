import React from "react";
import DocumentTitle from "react-document-title";
import TopBar from "./Topbar";
import Lists from "./Lists";

class Works extends React.Component {
  componentDidMount() {
    let s = sessionStorage.getItem('top');
    document.documentElement.scrollTop  = s;
    document.body.scrollTop = s;
  }

  componentWillUnmount() {
    let s = document.documentElement.scrollTop || document.body.scrollTop;
    sessionStorage.setItem("top", s);
    window.removeEventListener("scroll", this.onScrollTop);
  }

  render() {
    return (
      <React.Fragment>
        <DocumentTitle title="作品"/>
        <TopBar/>
        <Lists/>
      </React.Fragment>
    );
  }
}

export default Works;

