import React from "react";
import { connect } from "react-redux";
import { Drawer } from "antd-mobile";
import styles from "./style.scss";
import { getTuanQueryListData} from "../../../store/courseDetail";
import GroupList from "../GroupList";


@connect(
  state => state.courseDetail,
  { getTuanQueryListData }
)
class DrawerList extends React.Component {
  componentDidMount() {
   // console.log(this.props)
   //  this.props.getTuanQueryListData({
   //    CourseGroupId: this.props.id,
   //    pageIndex: 1,
   //    pageSize: 15
   //  })

  }

  render() {
    console.log(this.props);
    //debugger
    const sidebars = (
      <div >
        <div className={styles["close-drawer"]} onClick={this.props.change}>关闭</div>
        <GroupList data={this.props.data}/>
      </div>
    );
    return (<div>
      <Drawer
        className={styles["course-detail-drawer"]}
        enableDragHandle
        sidebar={sidebars}
        open={this.props.show}
      >
        "asdf"
      </Drawer>
    </div>);
  }
}

export default DrawerList;

