import React from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import Header from "./Header";
import GroupList from "./GroupList";
import Tab from "./Tab";
import DrawerList from "./DrawerList";
import { getEnterCourseGroupData } from "../../store/courseDetail.js";
import { clearState } from "../../store/clearState";
import FooterBar from './FooterBar';

/**
 * @constructor <CourseDetail />
 * @description 课程详情页
 */

const mapStateToProps = (state) => {
  return {
    courseDetailData: state.getIn(["courseDetail", "courseDetailData"]).toJS(),
    isDrawLoad: state.getIn(["courseDetail", "isDrawLoad"])
  };
};
const mapDispatchToProps = (dispatch) => ({
  clearState: () => dispatch(clearState()),
  getEnterCourseGroupData: (params) => dispatch(getEnterCourseGroupData(params))
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class CourseDetail extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getEnterCourseGroupData({
      CourseGroupId: id
    });
  };

  componentWillUnmount() {
    this.props.clearState();
  }

  render() {
    const data = this.props.courseDetailData;
    if (Object.keys(data).length === 0) {
      return null;
    }
    return (
      <React.Fragment>
        <DocumentTitle title={data.CourseGroupName} />
        <Header d={data} />
        {data.IsTuan === 'T' && <GroupList data={data.TuanOrderList} tuanNum={data.TuanOrderCount} />}
        <Tab data={data.Introduce} listData={data.CourseDataList} />
        {this.props.isDrawLoad && <DrawerList id={this.props.match.params.id} />}
        {/*<FooterBar />*/}
      </React.Fragment>
    );
  }
}


export default CourseDetail;