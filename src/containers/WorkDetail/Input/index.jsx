import React from 'react';
import styles from './style.scss';
import {getAddComment} from '../../../api';
import {TextareaItem} from 'antd-mobile';

class AddBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLike: false
        };
        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        console.log(e)
    }

    sendMsg() {
        console.log('111')

    }
    componentDidMount() {

    };

    render() {
        return (
            <div className={styles["input-pop"]}>
                <div className={styles.hei} onClick={this.props.change}></div>
                <div className={styles["bottom-input"]}>
                    <TextareaItem
                        autoFocus={"autofocus"}
                        className={styles.input}
                        placeholder="auto focus in Alipay client"
                        ref={el => this.autoFocusInst = el}
                        autoHeight
                        onFocus={(e) => this.onInput(e)}
                    />
                    <p className={styles.send} onClick={this.sendMsg}>发送</p>
                </div>
            </div>

        );
    }
}

export default AddBtn;