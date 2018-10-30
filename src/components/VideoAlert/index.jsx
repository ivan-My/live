import React from 'react';
import styles from './style.scss';

export default class VideoAlert extends React.Component {
    render() {
        const {src, getvideoUrl} = this.props;
        return (
            <div className={styles["video-alert"]}
                 onClick={(v) => {
                     getvideoUrl({url: ""}, v)
                 }}
            >
                <video src={src} controls/>
            </div>
        )
    }
}