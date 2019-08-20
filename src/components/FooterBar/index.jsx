import React from "react";
import { connect } from "react-redux";
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";
import styles from "./style.scss";
import { action } from "../../store/global";

const mapStateToProps = (state) => {
  return {
    tabs: state.getIn(["global", "tabs"]).toJS(),
    selectedTab: state.getIn(["global", "selectedTab"])
  };
};

@withRouter
@connect(
  //state => state.global
  mapStateToProps
)
export default class FootTabs extends React.Component {
  shouldComponentUpdate(nextProps) {
    return true
  }
  componentWillMount() {
    this.changeTabs();
  }

  changeTabs() {
    let path = this.props.location.pathname;
    let index = 0;
    if (path === "/Home") {
      index = 0;
    } else if (path === "/works") {
      index = 1;
    } else if (path === "/My") {
      index = 2;
    }
    this.props.dispatch(action.changeTab(index));
  }

  onPress(item) {
    this.props.dispatch(action.changeTab(item.id));
    this.props.history.replace(item.hash);
  }

  renderIcons(icon) {
    return (
      <div style={{
        width: "22px",
        height: "22px",
        background: `url(${icon}) center center /  21px 21px no-repeat`
      }}/>
    );
  }

  renderItems() {
    const { tabs, selectedTab } = this.props;
    return tabs.map((item) => {
      return (
        <TabBar.Item
          prerenderingSiblingsNumber={0}
          title={item.tit}
          key={item.id}
          icon={this.renderIcons(item.icon)}
          selectedIcon={this.renderIcons(item.selectedIcon)}
          selected={selectedTab === item.id}
          onPress={() => {
            this.onPress(item);
          }}
        >
        </TabBar.Item>
      );
    });
  }

  render() {
    console.log('render...')
    let path = this.props.location.pathname;
    return (
      path === "/home" || path === "/works" || path === "/My" ? <div className={styles.footBar}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          tabBarPosition="bottom"
        >
          {this.renderItems()}
        </TabBar>
      </div> : null
    );
  }
}

