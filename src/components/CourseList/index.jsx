import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.scss";
import { List, Badge } from "antd-mobile";
import StatusBtn from "../../components/StatusBtn";

/**
 * @constructor <CourseList/>
 * @description <课程列表模版>
 */
export const CourseList = (item) => {
  return (
    <div className={styles["course-list"]} key={item.CourseGroupId}>
      <div className={styles.item}>
        <div className={styles.badge}>
          <StatusBtn status={item.CourseStatus} className={styles.badge}/>
        </div>
        <Link to={"/courseDetail/" + item.CourseGroupId}>
          <List.Item thumb={item.TitleImg}>
            <div className={styles.tit}>{item.CourseGroupName}</div>
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
                {item.TuanPrice !== 0 && <Badge text="限时拼团" className={styles["foot-badge"]}/>}
                <p>&nbsp; ${item.TuanPrice === 0 ? item.OldPrice : item.TuanPrice}</p>
              </div>
            </div>
          </List.Item>
        </Link>
      </div>
    </div>
  );
};

