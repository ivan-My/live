import React from "react";
import {connect} from "react-redux";
import {Tabs} from 'antd-mobile';
import {getCourseWorkData, getTabIndex} from "../../../store/works";


/**
 * @constructor <TopBar />
 * @description 作品顶部tabs
 */

const tabs = [
    {title: "推荐"},
    {title: "最新"},
    {title: "最热"},
];

const style = {
    width: "7.5rem",
    position: "fixed",
    top: "0",
    zIndex: "1"
};

@connect(
    state => state.works,
    {getCourseWorkData, getTabIndex}
)
class TopBar extends React.Component {
    render() {
        return (
            <div style={style}>
                <Tabs tabs={tabs}
                      initialPage={this.props.tabIndex}
                      swipeable
                      useOnPan={false}
                      onTabClick={(tab, index) => {
                          this.props.getTabIndex(index)
                          this.props.getCourseWorkData({
                              pageIndex: 1,
                              pageSize: this.props.pageSize,
                              OrderType: index
                          }, 1, index);
                      }}
                />
            </div>
        )
    }
}

export default TopBar;
