import React from 'react';
import styles from '../TopicList/style.scss';
import {List} from "../List";

class TeachList extends React.Component {
    render() {
        const {data} = this.props;
        if (data === undefined || data.length === 0) {
            return null;
        }
        return (
            <div className={styles["work-prompt"]}>
                <div className={styles.head}>
                    老师点评
                </div>
                {
                    data.map(item =>{
                        return List(item)
                    })
                }
            </div>
        );
    }
}

export default TeachList;