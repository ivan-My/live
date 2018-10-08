import React from 'react';
import styles from './style.scss';
import {getIsLike, getAddLike, getRemoveLike} from '../../../api';
import {Toast} from 'antd-mobile';

/**
 * @constructor <FooterBtn />
 * @description 详情页底部收藏
 */

class FooterBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLike: false
        };
        this.add = this.add.bind(this);
    }

    componentDidMount() {
        let id = this.props.id;
        getIsLike({
            TargetType: 3,
            TargetId: id
        }).then(res => {
            this.setState({
                isLike: res.Data
            })
        })
    };

    add() {
        let id = this.props.id;
        const params = {
            TargetType: 3,
            TargetId: id
        };
        this.state.isLike ? getRemoveLike(params)
            .then(res => {
                Toast.info('取消点赞', 1);
                this.setState({isLike: false})
            }) : getAddLike(params)
            .then(res => {
                Toast.info('点赞成功', 1);
                this.setState({isLike: true})
            })
    }

    render() {
        const {isLike} = this.state;
        var url = isLike ? "http://test.hihiworld.com/web/static/img/good.png" : 'http://test.hihiworld.com/web/static/img/workgood.png';
        return (
            <div className={styles["add-btn"]}>
                <div className={styles.left}>
                    <img src={url} alt="" onClick={this.add}/>
                    &nbsp; 3
                </div>
                <div className={styles.center}></div>
                <div className={styles.right} onClick={this.props.change}>
                    <img src="http://test.hihiworld.com/web/static/img/comment@3x.png" alt=""/>
                </div>
            </div>
        );
    }
}

export default FooterBtn;