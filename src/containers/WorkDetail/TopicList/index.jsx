import React from "react";
import { connect } from "react-redux";
import { ListView } from "antd-mobile";
import styles from "./style.scss";
import { getCourseWorkQueryByIdData, getCommentQueryListData } from "../../../store/workDetail";
import Loading from "../../../components/LoadingM";
import { List_tpl } from "../List_tpl";
import { getCommentQueryList } from "../../../api";

/**
 * @constructor <TopicList />
 * @description 评论列表
 */

@connect(
  null,
  { getCourseWorkQueryByIdData, getCommentQueryListData }
)
class TopicList extends React.Component {
  state = {
    data: [],
    isLoding: true,
    type: 3,
    index: 0,
    size: 5,
    hasMore: false

  };

  componentDidMount() {
    this.getData();
  };

  onEndReached = () => {
    if (!this.state.isLoading && this.state.hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    this.getData();

  };

  async getData() {
    let id = this.props.id;
    let index = this.state.index;
    index++;
    const res = await getCommentQueryList({
      TargetType: this.state.type,
      pageIndex: index,
      pageSize: this.state.size,
      TargetId: id
    });
    const data = this.state.data.concat(res.Data.Data);
    res.Data.Data.length < this.state.size ? this.setState({
      hasMore: true
    }) : null;
    this.setState({
      data,
      index,
      isLoading: false
    });
  }

  static formatDataSource(data) {
    const _data = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    return _data.cloneWithRows(data);
  }

  render() {
    const data = this.state.data;
    if (Object.keys(data).length === 0) {
      return null;
    }
    const row = (item) => {
      return List_tpl(item);
    };
    return (
      <ListView
        style={{ marginBottom: "1rem" }}
        className={styles["work-prompt"]}
        ref={el => this.lv = el}
        dataSource={TopicList.formatDataSource(data)}
        renderHeader={() => <div className={styles["head"]}>评论</div>}
        renderFooter={() => (<div style={{ padding: 15, textAlign: "center" }}>
          {this.state.isLoading ? <Loading/> : "没有数据了"}
        </div>)}
        renderRow={row}
        useBodyScroll
        scrollRenderAheadDistance={1000}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={1}
      >
      </ListView>
    );
  }
}

export default TopicList;
