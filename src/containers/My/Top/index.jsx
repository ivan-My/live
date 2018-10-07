import React from 'react';
import {connect} from "react-redux"
import CSSModules from 'react-css-modules';
import styles from "./style.scss"



CSSModules(styles);
@connect(
    state => state.userInfos

)


export default class Tabs extends React.Component {

    render() {
        const{ HeadImg,NickName} = this.props;
        return (
            <div className={styles.top}>
                <div className={styles.headImg }>
                    <img src={HeadImg} alt=""/>
                    <p>{NickName}</p>
                </div>
            </div>
        );
    }
}
