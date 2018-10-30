import React from "react";
import styles from "./style.scss";
import { Button, WhiteSpace, WingBlank } from "antd-mobile";

/**
 * @constructor <FooterBar/>
 * @description <底部按钮栏>
 */

class FooterBar extends React.Component {

  render() {
    return (
      <div className={styles["footer-bar"]}>
        <div className={styles.left}>
          <img className={styles["left-icon"]} src="https://www.hihiworld.com/web/static/img/collectioned.png" alt=""/>
          <p>收藏</p>
        </div>
        <div className={styles.right}>
          <div className={styles["buy-item"]}>
            <p>199</p>
            <p>原价购买</p>
          </div>
          <div className={styles["buy-item"]}>
            <p>199</p>
            <p>原价购买</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterBar;

