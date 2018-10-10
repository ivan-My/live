import React from "react";
import { connect } from "react-redux";
import Countdown from "../../../components/Countdown";
import styles from "./style.scss";
import { actions } from "../../../store/courseDetail";

/**
 * @constructor <GroupList />
 * @description 中间团购列表
 */

const mapDispatchToProps = (dispatch) => ({
  toggleDraw: () => dispatch(actions.toggleDraw())
});

@connect(
  null,
  mapDispatchToProps
)
class GroupList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles["collage-lists"]}>
        <div className={styles.tit}>离拼团活动结束还剩
        </div>
        <div className={styles["more-tuan"]}>
          <span>{data.length}人正在开团拼单，可直接参与</span>
          {!this.props.isDrawLoad && <span onClick={() => {
            this.props.toggleDraw();
          }}>查看更多  <i> > </i></span>}
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
                               startTime={Math.round(item.TuanEndTime / 1000)}
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