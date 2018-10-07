import React from 'react';
import {Link} from 'react-router-dom';
import cls from 'classnames';
import {Tabs, Badge, List} from 'antd-mobile';
import styles from './style.scss'

const tabs = [
    {title: '课程简介', sub: '1'},
    {title: '课程目录', sub: '2'},
];
const Item = List.Item;
export default class Bar extends React.Component {
    render() {
        let {data, listData} = this.props;
        if (listData === undefined) {
            listData = [];
            return null
        }
        const clsname = cls({
            [styles.show]: listData.length === 1,
            [styles["courseDetail-bar"]]: listData.length > 1
        });
        return (
            <div className={clsname}>
                <Tabs
                    tabs={tabs}
                    initialPage={0}
                    swipeable={false}
                    tabBarUnderlineStyle={{
                        color: 'red'
                    }}
                >
                    <div className={styles.htmlCon}
                         dangerouslySetInnerHTML={{__html: data}}
                    />
                    <List className={styles["courseDetail-list"]}>
                        {
                            listData.map((item) => {
                                let s = item.IsFree;
                                let tit = s === "F" ? "未购买" : "可以试听";
                                let color = s === "L" ? "yellow" : "#36f0ff";
                                return (
                                    <div key={item.CourseId}
                                         className={styles.item}
                                    >
                                        <Link to={'/courseDetail/' + item.CourseId}>
                                            <Item
                                                thumb={item.CourseImg}
                                            >
                                                <div style={{
                                                    width: "100%",
                                                    overflow: "hidden"
                                                }}>{item.CourseName}</div>
                                                <div className="foot">
                                                    <p className={styles["end-time"]}>{item.EndTime}
                                                        {item.VideoStatus === 'W' ? <span> &nbsp;预告</span> : null}
                                                    </p>
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: "center",
                                                        justifyContent: 'space-between'
                                                    }}>
                                                        <p className={styles["end-time"]}> {item.ViewUserCnt}人学习</p>
                                                        <Badge text={tit}/>
                                                    </div>
                                                </div>
                                            </Item>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </List>

                </Tabs>
            </div>
        )
    }
}


