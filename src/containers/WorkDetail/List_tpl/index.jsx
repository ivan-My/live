import React from "react";
import styles from "./style.scss";


export const List_tpl = (item) => {
  let createTime = item.CreateTime.substr(0, 10);
  return (
    <div className={styles["comment-list"]}
         key={item.CommentId}>
      <div className={styles.top}>
        <div className={styles["head-img"]}>
          <img src={item.UserData.HeadImg} alt=""/>
        </div>
        <div className={`${styles["f-c-6f"]} ${styles.title}`}>{item.Title}</div>
        <div className={styles["f-c-6f"]}>{createTime}</div>
      </div>
      <div className={styles["list-content"]}>
        {item.Detail}
      </div>
    </div>
  );
};