
import React from 'react'
import Proptypes from 'prop-types'
import loading from './loading.gif'
import styles from './index.scss'
/**
 * @constructor <Loading />
 * @description 加载更多的数据
 */

export default class Loading extends React.Component {
    static proptypes = {
        title: Proptypes.string,
        style: Proptypes.object,
    };

    static defaultProps = {
        title: '',
        style: {},
    };

    constructor(props) {
        super(props)
        this.ratio = window.devicePixelRatio
        this.state = {
            width: 14 * this.ratio,
            height: 14 * this.ratio,
        }
    };

    render() {
        const { width, height } = this.state
      //  const {style} = this.props
        return (
            <div className={styles.loading}>
                <img
                    src={loading}
                    width={width}
                    height={height}
                    style={{ width: width / this.ratio, height: height / this.ratio }} />
                <p className={styles.desc}>正在加载更多的数据...</p>
            </div>
        )
    }
}
