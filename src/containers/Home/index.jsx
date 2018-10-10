import React from "react";
import { connect } from "react-redux";
import { getQueryListData } from "../../store/home";
import DocumentTitle from "react-document-title";
import Banner from "../../components/Banner";
import CourseTabs from "./CourseTabs/index";
import List from "./Lists";

/**
 * @constructor <Home />
 * @description 作品
 */

const mapStateToProps = (state) => {
  return {
    banner: state.getIn(["home","bannerData"]).toJS()
  };
};

@connect(
  mapStateToProps,
  { getQueryListData }
)
class Home extends React.Component {
  componentDidMount() {
    this.props.getQueryListData({
      newsType: "banner",
      pageIndex: 1,
      pageSize: 10
    });
  }

  render() {
    const { banner } = this.props;
    return (
      <div>
        <DocumentTitle title="海淘好课"/>
        <Banner data={banner}/>
        <CourseTabs/>
        <List/>
      </div>
    );
  }
}

export default Home;
