import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Badge, List } from "antd-mobile";
import cls from "classnames";
import styles from "./style.scss";

/**
 * @constructor <Tab />
 * @description 中间tabs
 */

export default class Tab extends React.Component {
  tabs = [
    { title: "课程简介", sub: "1" },
    { title: "课程目录", sub: "2" }
  ];

  renderList(data) {
    return (
      <List className={styles["courseDetail-list"]}>
        {
          data.map((item) => {
            let s = item.IsFree;
            let tit = s === "F" ? "未购买" : "可以试听";
            //  let color = s === "L" ? "yellow" : "#36f0ff";
            return (
              <div key={item.CourseId} className={styles.item}>
                <Link to={"/courseDetail/" + item.CourseId}>
                  < List.Item thumb={item.CourseImg}>
                    <div>{item.CourseName}</div>
                    <div className="foot">
                      <p className={styles["end-time"]}>{item.EndTime}
                        {item.VideoStatus === "W" ? <span> &nbsp;预告</span> : null}
                      </p>
                      <div className={styles["foot-num"]}>
                        <p className={styles["end-time"]}> {item.ViewUserCnt}人学习</p>
                        <Badge style={{ color: "#6f9cb9", background: "none" }} text={tit}/>
                      </div>
                    </div>
                  </List.Item>
                </Link>
              </div>
            );
          })
        }
      </List>
    );
  }

  render() {
    let { data, listData } = this.props;
    if (listData === undefined) {
      listData = [];
      return null;
    }
    const clsname = cls({
      [styles.show]: listData.length === 0,
      [styles["courseDetail-bar"]]: listData.length > 0
    });
    return (
      <div className={clsname}>
        <Tabs
          tabs={this.tabs}
          initialPage={0}
          swipeable={false}
          tabBarUnderlineStyle={{ color: "red" }}
        >
          <div className={styles.htmlCon} dangerouslySetInnerHTML={{ __html: data }}/>
          {this.renderList(listData)}
        </Tabs>
      </div>
    );
  }
}


