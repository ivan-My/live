import React from "react";
import { connect } from "react-redux";
import { TabBar } from "antd-mobile";
import styles from "./style.scss";
import { getCourseTabsData, getSumGetChannelCourseGroupData, actions } from "../../../store/home";
import ContentLoader from "react-content-loader";


const MyLoader = props => (
  <ContentLoader
    height={160}
    width={400}
    speed={3}
    secondaryColor="#ffffff"
    primaryColor="lightgray"
    {...props}
  >

    <circle cx="50" cy="50" r="30" />
    <circle cx="150" cy="50" r="30" />
    <circle cx="250" cy="50" r="30" />
    <circle cx="350" cy="50" r="30" />

    <rect x="35" y="91" rx="0" ry="0" width="30" height="5" />
    <rect x="135" y="91" rx="0" ry="0" width="30" height="5" />
    <rect x="235" y="91" rx="0" ry="0" width="30" height="5" />
    <rect x="335" y="91" rx="0" ry="0" width="30" height="5" />
  </ContentLoader>
);

/**
 * @constructor <CourseTabs />
 * @description 首页中间分类tabs
 */


const mapStateToProps = (state) => {
  return {
    tabsData: state.getIn(["home", "tabsData"]),
    selectedTab: state.getIn(["home", "selectedTab"]),
    scrollLoad: state.getIn(["home", "scrollLoad"])
  };
};
const mapDispatchToProps = (dispatch) => ({
  getCourseTabsData: () => dispatch(getCourseTabsData()),
  toggleTopShow: (show) => dispatch(actions.toggleTopShow(show)),
  selectBar: (index) => dispatch(actions.selectBar(index)),
  getSumGetChannelCourseGroupData: (params) => dispatch(getSumGetChannelCourseGroupData(params))
});
@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class CourseTabs extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.getCourseTabsData();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    let scrollY = window.scrollY;
    let scrollLoad = scrollY > 150 && true;
    setTimeout(() => {
      this.props.toggleTopShow(scrollLoad);
    }, 0);
  }

  renderItems(tabsData, selectedTab) {
    return tabsData.map((item) => {
      return (
        <TabBar.Item
          key={item.CourseChannelId}
          title={
            <span style={{
              color: item.Color,
              opacity: selectedTab === item.CourseChannelId ? 1 : 0.5
            }}
            >{item.ChannelName}</span>}
          icon={
            <div style={{
              width: "0.75rem",
              height: "0.75rem",
              background: `url(${item.IconImg}) center center /  21px 21px no-repeat`,
              opacity: selectedTab === item.CourseChannelId ? 1 : 0.5,
              backgroundSize: "contain"
            }}
            />
          }
          onPress={() => {
            this.props.selectBar(item.CourseChannelId);
            this.props.getSumGetChannelCourseGroupData({ CourseChannelId: item.CourseChannelId });
          }}
        />
      );
    });
  }

  render() {
    const { tabsData, selectedTab, scrollLoad } = this.props;
    const newTabsData = tabsData.toJS();
    return (
      <div
        className={styles["course-tabs"]}
        style={scrollLoad ? {
          position: "fixed",
          top: "0",
          width: "100%",
          height: "1.5rem",
          zIndex: "9"
        } : null}
      >
        {newTabsData.length > 0 ? <TabBar tabBarPosition="top" noRenderContent="false">
          {this.renderItems(newTabsData, selectedTab)}
        </TabBar> : <MyLoader />}
      </div>
    );
  }
}
