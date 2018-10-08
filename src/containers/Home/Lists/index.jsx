import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, Badge } from "antd-mobile";
import CSSModules from "react-css-modules";
import styles from "./style.scss";
import { getSumGetChannelCourseGroupData } from "../../../store/home";
import NullData from "../NullData";

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

  renderItems(data) {
    return data.map((item) => {
      let s = item.CourseStatus;
      let tit = s === "L" ? "开课中" : "预告";
      let color = s === "L" ? "yellow" : "#36f0ff";
      return (
        <div key={item.CourseGroupId} className={styles.item}>
          <Badge text={tit}
                 className={styles.badge}
                 style={{ color: color }}
          />
          <Link to={"/courseDetail/" + item.CourseGroupId}>
            <List.Item thumb={item.TitleImg}>
              <div style={{
                width: "100%",
                overflow: "hidden"
              }}>{item.CourseGroupName}</div>
              <div className={styles.head}>
                <div className={styles["head-img"]}>
                  <img src={item.HostData.HeadImg} alt=""/>
                </div>
                <div className={styles["detail-info"]}>
                  <nav>{item.HostData.HostName} | 共{item.CourseCnt}节课</nav>
                  <div>{item.LiveTimeDisplay}</div>
                </div>
              </div>
              <div className={styles.foot}>
                <p className={styles.userCnt}>{item.SaleUserCnt}人报名</p>
                <div className={styles["foot-item"]}>
                  <Badge text="限时拼团" className={styles["foot-badge"]}/>
                  <p>&nbsp; ${item.TuanPrice}</p>
                </div>
              </div>
            </List.Item>
          </Link>
        </div>
      );
    });
  }

  renderNullData(group, group1, group2, index) {
    if (group.length === 0 && group1.length === 0 && group2.length === 0 && index !== 1) {
      return <NullData index={index}/>;
    }
  }

  render() {
    const { group, group1, group2, selectedTab } = this.props;
    return (
      <div>
        {this.renderNullData(group, group1, group2, selectedTab)}
        {
          group.length > 0 &&
          <List className={styles["my-list"]} renderHeader={() => "好课上新"}>
            {this.renderItems(group1)}
          </List>
        }
        {
          group1.length > 0 &&
          <List className={styles["my-list"]} renderHeader={() => "人气推荐"}>
            {this.renderItems(group2)}
          </List>
        }
        {
          group.length > 0 &&
          <List className={styles["my-list"]} renderHeader={() => "更多严选"} style={{ paddingBottom: "2rem" }}>
            {this.renderItems(group)}
          </List>
        }

      </div>
    );
  }
}

export default Lists;