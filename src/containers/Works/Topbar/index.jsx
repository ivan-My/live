import React from "react";
import { connect } from "react-redux";
import { Tabs } from "antd-mobile";
import { getCourseWorkData, getTabIndex } from "../../../store/works";


/**
 * @constructor <TopBar />
 * @description 作品顶部tabs
 */

const tabs = [
  { title: "推荐" },
  { title: "最新" },
  { title: "最热" }
];

const style = {
  width: "7.5rem",
  position: "fixed",
  top: "0",
  zIndex: "1"
};

const mapStateToProps = (state) => {
  return {
    tabIndex: state.getIn(["works", "tabIndex"])
  };
};

@connect(
  mapStateToProps,
  { getCourseWorkData, getTabIndex }
)
class TopBar extends React.Component {
  render() {
    const { getTabIndex, pageSize, getCourseWorkData } = this.props;
    return (
      <div style={style}>
        <Tabs tabs={tabs}
              initialPage={this.props.tabIndex}
              swipeable
              useOnPan={false}
              onTabClick={(tab, index) => {
                getTabIndex(index);
                getCourseWorkData({
                  pageIndex: 1,
                  pageSize: pageSize,
                  OrderType: index
                }, 1, index);
              }}
        />
      </div>
    );
  }
}

export default TopBar;
