import React from "react";
import { Drawer } from "antd-mobile";
import styles from "./style.scss";
import GroupList from "../GroupList";

class DrawerList extends React.Component {
  render() {
    const sidebars = (
      <div>
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

