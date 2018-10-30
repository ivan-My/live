import React from "react";
import { connect } from "react-redux";
import { List } from "antd-mobile";
import styles from "./style.scss";
import { getSumGetChannelCourseGroupData } from "../../../store/home";
import NullCourse from "../NullCourse";
import { CourseList } from "../../../components/CourseList";

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
        {data.map((item) => {
          return CourseList(item);
        })}
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
        {newnewData.length > 0 && this.renderList(newnewData, "好课上新")}
        {newrecommendData.length > 0 && this.renderList(newrecommendData, "人气推荐")}
        {newGroup.length > 0 && this.renderList(newGroup, "更多严选")}
        </React.Fragment>
    );
  }
}

export default Lists;