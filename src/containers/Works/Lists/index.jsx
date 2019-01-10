import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Icon, ListView } from "antd-mobile";
import { getCourseWorkData, getvideoUrl } from "../../../store/works";
import styles from "./style.scss";
import Loading from "../../../components/LoadingM";
import VideoAlert from "../../../components/VideoAlert";

const mapStateToProps = (state) => {
  return {
    data: state.getIn(["works", "data"]).toJS(),
    pageSize: state.getIn(["works", "pageSize"]),
    OrderType: state.getIn(["works", "OrderType"]),
    tabIndex: state.getIn(["works", "tabIndex"]),
    pageIndex: state.getIn(["works", "pageIndex"]),
    videoUrl: state.getIn(["works", "videoUrl"])
  };
};
@connect(
  mapStateToProps,
  { getCourseWorkData, getvideoUrl }
)
export default class Lists extends React.Component {
  componentDidMount() {
    this.getListData(1);
  }

  getListData(index) {
    const { getCourseWorkData, pageSize, tabIndex } = this.props;
    getCourseWorkData({
      pageSize: pageSize,
      OrderType: tabIndex
    }, index, tabIndex);
  }

  onEndReached = () => {
    const { getCourseWorkData, pageSize, tabIndex, pageIndex } = this.props;
    let index = pageIndex;
    index++;
    getCourseWorkData({
      pageIndex: index,
      pageSize: pageSize,
      OrderType: tabIndex
    }, index, tabIndex);
  };

  renderImgList(d) {
    return (
      d.Image !== "" ? d.Image.split(",").map((item, index, array) => {
        return (
          <div className={array.length !== 1 ? styles.list : styles.alist}
               key={index}>
            <img src={item} alt=""/>
          </div>
        );
      }) : <div className={styles.alist}>
        <img src={d.Poster} alt=""/>
        <img className={styles.play}
             onClick={(v) => this.props.getvideoUrl({ url: d.VideoUrl }, v)}
             src="http://test.hihiworld.com/web/static/img/biggestplay@3x.png" alt=""/>
      </div>
    );
  }

  renderRow(d) {
    return (
      <div
        key={d.WorkId}
        className={styles.item}>
        <div className={styles.top}>
          <div className={styles["top-img"]}>
            <img src={d.UserData.HeadImg} alt=""/>
          </div>
          {d.UserData.NickName}
          <span className={styles.time}>{d.CreateTime}</span>
        </div>
        <div className={styles.imgList}>
          {this.renderImgList(d)}
        </div>
        <div>
          <div style={{
            marginTop: "10px"
          }}>{d.Title}</div>
          <Link to={"/workDetail/" + d.WorkId}>
            <div className={styles["work-data"]}>
              <div className={styles["work-data-item"]}>
                <img src="http://test.hihiworld.com/web/static/img/workbrowse.png" alt=""/>
                &nbsp;{d.BrowseCnt}
              </div>
              <div className={styles["work-data-item"]}>
                <img src="http://test.hihiworld.com/web/static/img/workgood.png" alt=""/>
                &nbsp;{d.LikeCnt}
              </div>
              <div className={styles["work-data-item"]}>
                <img src="http://test.hihiworld.com/web/static/img/workcomment.png" alt=""/>
                &nbsp;{d.CommentCnt}
              </div>
            </div>
          </Link>
        </div>
        <Link to={"/courseDetail/" + d.CourseGroupId}>
          <div className={styles.coursename}>
            <div className={styles.coursenameImg}>
              <img src={d.TeacherData.HeadImg} alt=""/>
            </div>
            <div>{d.CourseGroupName}</div>
            <Icon type="right" className={styles["icon-left"]}/>

          </div>
        </Link>
      </div>
    );
  }

  formatDataSource() {
    const data = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    return data.cloneWithRows(this.props.data);
  }

  render() {
    const { videoUrl, getvideoUrl } = this.props;
    const row = (d) => {
      return this.renderRow(d);
    };
    return (
      <React.Fragment>
        <ListView
          className={styles["my-listView"]}
          ref={el => this.lv = el}
          dataSource={this.formatDataSource()}
          renderRow={row}
          useBodyScroll
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={3}
          renderFooter={() => (
            <div className={styles.renderFooter}><Loading/></div>
          )}
        />
        {videoUrl !== "" && <VideoAlert src={videoUrl} getvideoUrl={getvideoUrl}/>}
      </React.Fragment>
    );
  }
}
