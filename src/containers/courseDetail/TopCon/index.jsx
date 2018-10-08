import React from "react";
import styles from "./style.scss";
import Countdown from "../../../components/Countdown";
import BackHome from "../../../components/BackHome";


class TopCon extends React.Component {
  render() {
    const { d } = this.props;
    return (
      <div className={styles["course-detail"]}>
        <BackHome/>
        <div className={styles["top-img"]}>
          <img src={d.BannerImgs} alt=""/>
        </div>
        <div className={styles.item}>
          <Countdown className="Error-time"
                     startTime={1531891577}
                     endTime={1538262926}
                     isLoad={1}
                     msg="倒计时结束了"
          />
          <div>{d.CourseGroupName}</div>
          <div className={styles["white-bg"]}>
            {d.CourseStatus === "L" ? <div className={styles.live}>&nbsp;&nbsp;开课中</div> : null}
            {d.LiveTimeDisplay}&nbsp; {d.SaleUserCnt}人报名 <span>¥{d.NowPrice}</span>
          </div>
        </div>
        <div className={styles["host-box"]}>
          <div className={styles.avatar}>
            <img src={d.TitleImg} alt=""/>
          </div>
          <div className={styles.name}>
            {d.HostData.HostName}<span>&nbsp;|&nbsp;</span>共{d.CourseCnt}两节课
          </div>
          <div className={styles["hose-go"]}>
            主播其他课程推荐 <span> > </span>
          </div>
        </div>
      </div>
    );
  }
}

export default TopCon;
