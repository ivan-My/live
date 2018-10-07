import React from "react";
import Countdown from "../../../components/Countdown";
import styles from "./style.scss";

class GroupList extends React.Component {
  render() {
    const { data, show } = this.props;
    return (
      <div className={styles["collage-lists"]}>
        <p className={styles.tit}>离拼团活动结束还剩</p>
        <div className={styles["more-tuan"]}>
          <span>9人正在开团拼单，可直接参与</span>
          {show === undefined ? null : <span onClick={this.props.change}>查看更多  <i> > </i></span>}
        </div>
        {
          data.map(item => {
            let count = item.TuanTotalUserCnt - item.TuanJoinUserCnt;
            return (
              <div className={styles["collage-list-item"]} key={item.TuanOrderId}>
                <p className={styles["collage-list-item-name"]}>{item.CreateTuanUserData.NickName}</p>
                <div className={styles.right}>
                  <div style={{ marginRight: "10px" }}>
                    还差{count}人
                    <br/>剩余
                    <Countdown className="Error-time"
                               startTime={1531891577}
                               endTime={1538262926}
                               isLoad={0}
                               msg="倒计时结束了"
                    />
                  </div>
                  <div className={styles["join-btn"]}>参与拼团</div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default GroupList;