import React from "react";
import { connect } from "react-redux";
import { List } from "antd-mobile";
import CSSModules from "react-css-modules";
import styles from "./style.scss";
import { getSumGetChannelCourseGroupData } from "../../../store/home";
import { CourseList } from "../../../components/CourseList";
import NullCourse from "../NullCourse";

/**
 * @constructor <Lists />
 * @description 作品list
 */

const mapStateToProps = (state) => {
  return {
    group: state.getIn(["home", "group"]),
    group1: state.getIn(["home", "group1"]),
    group2: state.getIn(["home", "group2"]),
    selectedTab: state.getIn(["home", "selectedTab"])
  };
};

@connect(
  mapStateToProps,
  { getSumGetChannelCourseGroupData }
)
@CSSModules(styles)
class Lists extends React.Component {
  static renderItems(data) {
    return data.map((item) => {
      return CourseList(item);
    });
  }

  static renderNullData(group, group1, group2, index) {
    if (group.length === 0 && group1.length === 0 && group2.length === 0 && index !== 1) {
      return <NullCourse index={index}/>;
    }
  }

  componentDidMount() {
    let id = this.props.selectedTab;
    this.props.getSumGetChannelCourseGroupData({ CourseChannelId: id });
  }

  render() {
    const { group, group1, group2, selectedTab } = this.props;
    const newGroup = group.toJS();
    const newGroup1 = group1.toJS();
    const newGroup2 = group2.toJS();
    return (
      <div>
        {Lists.renderNullData(newGroup, newGroup1, newGroup2, selectedTab)}
        {
          newGroup.length > 0 &&
          <List className={styles["my-list"]} renderHeader={() => "好课上新"}>
            {Lists.renderItems(newGroup1)}
          </List>
        }
        {
          newGroup1.length > 0 &&
          <List className={styles["my-list"]} renderHeader={() => "人气推荐"}>
            {Lists.renderItems(newGroup2)}
          </List>
        }
        {
          newGroup2.length > 0 &&
          <List className={styles["my-list"]} renderHeader={() => "更多严选"} style={{ paddingBottom: "2rem" }}>
            {Lists.renderItems(newGroup)}
          </List>
        }

      </div>
    );
  }
}

export default Lists;