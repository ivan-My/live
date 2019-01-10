import React from "react";
import { connect } from "react-redux";
import { List } from "antd-mobile";
import styles from "./style.scss";
import NullCourse from "../NullCourse";
import { CourseList } from "../../../components/CourseList";
import { getSumGetChannelCourseGroupData } from "../../../store/home";

import ContentLoader from "react-content-loader";

const MyFacebookLoader = () => (
  <ContentLoader
    height={100}
    speed={3}
    secondaryColor="#ffffff"
    primaryColor="lightgray"
  >
    <circle cx="60" cy="60" r="30"/>
    <rect x="120" y="40" rx="4" ry="4" width="240" height="10"/>
    <rect x="120" y="60" rx="3" ry="3" width="180" height="10"/>
    <rect x="120" y="80" rx="3" ry="3" width="180" height="10"/>
  </ContentLoader>
);

/**
 * @constructor <Lists />
 * @description 作品list
 */

const mapStateToProps = (state) => {
  return {
    hotData: state.getIn(["home", "hotData"]),
    newData: state.getIn(["home", "newData"]),
    recommendData: state.getIn(["home", "recommendData"]),
    selectedTab: state.getIn(["home", "selectedTab"])
  };
};

@connect(
  mapStateToProps,
  { getSumGetChannelCourseGroupData }
)
class Lists extends React.Component {
  componentDidMount() {
    let id = this.props.selectedTab;
    this.props.getSumGetChannelCourseGroupData({ CourseChannelId: id });
  }

  renderList(data, info) {
    return (
      <List className={styles["my-list"]} renderHeader={() => info}>
        {data.map((item) => CourseList(item))}
      </List>
    );
  }

  renderNullData(hotData, newData, recommendData, index) {
    if (hotData.length === 0 && newData.length === 0 && recommendData.length === 0 && index !== 1) {
      return <NullCourse index={index}/>;
    }
  }

  render() {
    const { hotData, newData, recommendData, selectedTab } = this.props;
    const newGroup = hotData.toJS();
    const newnewData = newData.toJS();
    const newrecommendData = recommendData.toJS();
    return (
      <React.Fragment>
        {this.renderNullData(newGroup, newnewData, newrecommendData, selectedTab)}
        {newnewData.length > 0 ? this.renderList(newnewData, "好课上新") : <MyFacebookLoader/>}
        {newrecommendData.length > 0 ? this.renderList(newrecommendData, "人气推荐") : <MyFacebookLoader/>}
        {newGroup.length > 0 ? this.renderList(newGroup, "更多严选") : <MyFacebookLoader/>}
      </React.Fragment>
    );
  }
}

export default Lists;