import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ListView, Icon } from "antd-mobile";
import { getCourseWorkData, getvideoUrl } from "../../../store/works";
import CSSModules from "react-css-modules";
import styles from "./style.scss";
import Loading from "../../../components/Loadingm";
import VideoAlert from "../../../components/VideoAlert";

@connect(
  state => state.works,
  { getCourseWorkData, getvideoUrl }
)
@CSSModules(styles)
export default class Lists extends React.Component {
  componentDidMount() {
    this.getListData(1);
  }

  getListData(index) {
    this.props.getCourseWorkData({
      pageIndex: index,
      pageSize: this.props.pageSize,
      OrderType: this.props.tabIndex
    }, index, this.props.tabIndex);
  }

  onEndReached = () => {
    let index = this.props.pageIndex;
    index++;
    this.props.getCourseWorkData({
      pageIndex: index,
      pageSize: this.props.pageSize,
      OrderType: this.props.tabIndex
    }, index, this.props.tabIndex);
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

  transDataSource() {
    const data = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    const dataSource = data.cloneWithRows(this.props.data);
    return dataSource;
  }

  render() {
    const row = (d) => {
      return this.renderRow(d);
    };
    return (
      <React.Fragment>
        <ListView
          styleName="my-listView"
          ref={el => this.lv = el}
          dataSource={this.transDataSource()}
          renderRow={row}
          useBodyScroll
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={3}
          renderFooter={() => (
            <div className={styles.renderFooter}><Loading/></div>
          )}
        />
        {this.props.videoUrl !== "" ? <VideoAlert src={this.props.videoUrl}
                                                  getvideoUrl={this.props.getvideoUrl}/> : null}
                                                  }
      </React.Fragment>
    );
  }
}
