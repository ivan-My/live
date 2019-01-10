import React from "react";
import styles from "./style.scss";

/**
 * @constructor <NullDatta/>
 * @description <没有数据时显示的内容>
 */

class NullCourse extends React.Component {
  static toImg(index) {
    let src = '';
    switch (index) {
      case 1:
        return src = "http://116.211.88.85:8602/static/roomChannel/draw.png";
      case 2:
        return src = "http://116.211.88.85:8602/static/roomChannel/music.png";
      case 3:
        return src = "http://116.211.88.85:8602/static/roomChannel/science.png";
      case 4:
        return src = "http://116.211.88.85:8602/static/roomChannel/life.png";
      default:
        return null;
    }
  }
  render() {
    let index = this.props.index;
    return (
      <div className={styles["no-course"]}>
        <div className={styles["no-img"]}>
          <img src={NullCourse.toImg(index)} alt="" />
        </div>
        <p>更多好课正在赶来</p>
        <p>同学们敬请期待</p>
      </div>
    );
  }
}

export default NullCourse;

