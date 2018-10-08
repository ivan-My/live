import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, Badge } from "antd-mobile";
import CSSModules from "react-css-modules";
import styles from "./style.scss";
import { getSumGetChannelCourseGroupData } from "../../../store/home";
import NullData from "../NullData";
import {CourseList} from "../../../components/CourseList";

/**
 * @constructor <Lists />
 * @description 作品list
 */

@connect(
  state => state.home,
  { getSumGetChannelCourseGroupData }
)
@CSSModules(styles)
class Lists extends React.Component {
  componentDidMount() {
    let id = this.props.selectedTab;
    this.props.getSumGetChannelCourseGroupData({ CourseChannelId: id });
  }

  static renderItems(data) {
    return data.map((item) => {
     // return <CourseList data={item} key={item.CourseGroupId}/>;
      return CourseList(item)
    });
  }

  static renderNullData(group, group1, group2, index) {
    if (group.length === 0 && group1.length === 0 && group2.length === 0 && index !== 1) {
      return <NullData index={index}/>;
    }
  }

  render() {
    const { group, group1, group2, selectedTab } = this.props;
    return (
      <div>
        {Lists.renderNullData(group, group1, group2, selectedTab)}
        {
          group.length > 0 &&
          <List className={styles["my-list"]} renderHeader={() => "好课上新"}>
            {Lists.renderItems(group1)}
          </List>
        }
        {
          group1.length > 0 &&
          <List className={styles["my-list"]} renderHeader={() => "人气推荐"}>
            {Lists.renderItems(group2)}
          </List>
        }
        {
          group.length > 0 &&
          <List className={styles["my-list"]} renderHeader={() => "更多严选"} style={{ paddingBottom: "2rem" }}>
            {Lists.renderItems(group)}
          </List>
        }

      </div>
    );
  }
}

export default Lists;