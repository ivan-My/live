import React from "react";
import { connect } from "react-redux";
import { Drawer } from "antd-mobile";
import styles from "./style.scss";
import GroupList from "../GroupList";
import { getTuanQueryListData, actions } from "../../../store/courseDetail";

const mapDispatchToProps = (dispatch) => ({
  getTuanQueryListData: (params) => dispatch(getTuanQueryListData(params)),
  toggleDraw: () => dispatch(actions.toggleDraw())
});

@connect(
  state => state.courseDetail,
  mapDispatchToProps
)
class DrawerList extends React.Component {
  componentDidMount() {

    this.props.getTuanQueryListData({
      CourseGroupId: this.props.id,
      pageIndex: 1,
      pageSize: 15
    });
  }

  sidebars() {
    return (
      <React.Fragment>
        <div className={styles["close-drawer"]} onClick={() => {
          this.props.toggleDraw();
        }}>关闭
        </div>
        <GroupList data={this.props.tuanListData.Data}/>
      </React.Fragment>
    );
  }

  render() {
    if (Object.keys(this.props.tuanListData).length === 0) {
      return null;
    }
    return (

      <React.Fragment>
        <Drawer
          className={styles["course-detail-drawer"]}
          enableDragHandle
          sidebar={this.sidebars()}
          open={this.props.isDrawLoad}
        >
          <span/>
        </Drawer>
      </React.Fragment>);
  }
}

export default DrawerList;

