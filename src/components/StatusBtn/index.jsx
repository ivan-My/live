import React from "react";
import styles from "./style.scss";

/**
 * @constructor <StatusBtn/>
 * @description <直播状态按钮>
 */

class StatusBtn extends React.Component {

  toBtn() {
    let style, info;
    switch (this.props.status) {
      case "L":
        style = styles["status-l"];
        info = "开课中";
        break;
      case "W":
        style = styles["status-w"];
        info = "预告";
        break;
      default:
        return null;
    }
    return <div className={`${styles["status-btn"] } ${style}`}>{info}</div>;
  }

  render() {
    return (
      <React.Fragment>
        {this.toBtn()}
      </React.Fragment>

    );
  }
}

export default StatusBtn;

