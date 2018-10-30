import React from 'react';
import {List} from 'antd-mobile';
import {listInfos} from "./listConfig";
import {Link} from "react-router-dom";
import styles from './style.scss'

export default class Tabs extends React.Component {
    render() {
        return (
            <div>
                <List className={styles["my-list"]}>
                    {
                        listInfos.map(item => {
                            return (

                                <Link to={item.hash}
                                      key={item.id}
                                >
                                    <List.Item arrow="horizontal"
                                               thumb={item.thumb}
                                               color={"red"}

                                    >
                                        {item.tit}
                                    </List.Item>
                                </Link>

                            )
                        })
                    }
                </List>
            </div>
        );
    }
}
