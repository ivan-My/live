import React from "react";
import { connect } from "react-redux";
import { getTuanQueryList } from "../../api";
import DocumentTitle from "react-document-title";
import TopCon from "./TopCon";
import GroupList from "./GroupList";
import Tab from "./Tab";
import DrawerList from "./DrawerList";
import { getEnterCourseGroupData } from "../../store/courseDetail.js";

/**
 * @constructor <CourseDetail />
 * @description 课程详情页
 */

@connect(
  state => state.courseDetail,
  { getEnterCourseGroupData }
)
class CourseDetail extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getEnterCourseGroupData({
      CourseGroupId: id
    });
  };

  render() {
    const data = this.props.courseDetailData;
    if (Object.keys(data).length === 0) {
      return null;
    }
    return (
      <React.Fragment>
        <DocumentTitle title={data.CourseGroupName}/>
        <TopCon d={data}/>
        {data.TuanOrderList.length > 0 && <GroupList data={data.TuanOrderList} tuanNum={data.TuanOrderCount}/>}
        <Tab data={data.Introduce} listData={data.CourseDataList}/>
        {this.props.isDrawLoad && <DrawerList id={this.props.match.params.id}/>}
      </React.Fragment>
    );
  }
}


export default CourseDetail;