import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import CSSModules from 'react-css-modules';
import styles from "./style.scss";

/**
 * @constructor <Banner />
 * @description 轮播图
 */


@CSSModules(styles)
export default class Banner extends React.Component {
    state = {
        imgHeight: 150,
    };
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay
                    infinite
                >
                    {this.props.data.map((item, index) => (
                        <a
                            key={index}
                            href=""
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={item.ImgUrl}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {this.setState({ imgHeight: 'auto' });}}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        )
    }
}

