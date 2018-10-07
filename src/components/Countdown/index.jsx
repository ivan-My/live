import React, {Component} from 'react';
import styles from './style.scss';

let add0 = m => {
    return m < 10 ? "0" + m : m;
};

class Countdown extends Component {

    state = {     // 通过state来定义当前组件内部自己的数据
        clocker: '',
        timeobj: {}
    };

    componentDidMount = () => {
        // this.props.endTime 获取父组件中的数据
        let timeLag = parseInt(this.props.endTime, 10) - parseInt(this.props.startTime, 10);
        window.timer = setInterval(() => {       // 创建倒计时定时器
            let time = timeLag--;              // time为两个时间戳之间相差的秒数
            let _clocker = '';                 // 打印出时间对象
            let seconds = time;
            if (time % 60 < 10) {
                seconds = '0' + time % 60;
            } else {
                seconds = time % 60;
            }
            let timeobj = {
                seconds: seconds,
                minutes: Math.floor(time / 60) % 60,
                hours: Math.floor(time / 60 / 60) % 24,
                days: Math.floor(time / 60 / 60 / 24),
                weeks: Math.floor(time / 60 / 60 / 24 / 7),
                months: Math.floor(time / 60 / 60 / 24 / 30),
                years: Math.floor(time / 60 / 60 / 24 / 365)
            };
            _clocker = `${add0(timeobj.days)} : ${add0(timeobj.hours)} : ${add0(timeobj.minutes)} : ${add0(timeobj.seconds)}`;
            if (time <= 0) { // 当时间差小于等于0的时候证明倒计时已经过结束
                console.log("倒计时结束了")
                 _clocker = this.props.msg || "倒计时已结束";
                clearInterval(this.timer)
            }
            this.setState({
                clocker: _clocker,
                timeobj
            })
        }, 1000);
    };
    componentWillUnmount(){
        clearInterval(window.timer);
    };

    render() {
        const obj = this.state.timeobj;
        let isLoad = this.props.isLoad;
        if (Object.keys(obj).length === 0) {
            return null;
        }
        return (
            isLoad === 1 ?
                <div className={styles.countdown}>
                    <p>倒计时：</p>
                    <div>
                        {obj.days}天
                    </div>
                    <div>
                        {obj.hours}时
                    </div>
                    <div>
                        {obj.minutes} 分
                    </div>
                    <div>
                        {obj.seconds} 秒
                    </div>

                </div> : <span>&nbsp;{obj.hours}:{obj.minutes}:{obj.seconds}</span>

        );
    }
}

export default Countdown;
