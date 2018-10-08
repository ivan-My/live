import React from "react";
import { connect } from "react-redux";
import { getTuanQueryList } from "../../api";
import DocumentTitle from "react-document-title";
import TopCon from "./TopCon";
import GroupList from "./GroupList";
import Bar from "./Bar";
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
  state = {
    tuanQueryList: [],
    open: false
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getEnterCourseGroupData({
      CourseGroupId: id
    });
    getTuanQueryList({
      CourseGroupId: id,
      pageIndex: 1,
      pageSize: 15
    }).then(res => {
      this.setState({
        tuanQueryList: res.Data.Data
      });
    });
  };

  onOpenChange = () => {
    this.setState({ open: !this.state.open }, () => {

    });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.courseDetailData !== nextProps.courseDetailData;
  // }

  render() {
    const d = this.props.courseDetailData;
    if (Object.keys(d).length === 0) {
      return null;
    }
    return (
      <div>
        <DocumentTitle title={d.CourseGroupName}/>
        <TopCon d={d}/>
        {
          d.TuanOrderList.length > 0 &&
          <GroupList data={d.TuanOrderList}
                     change={this.onOpenChange}
                     show={this.state.open}
                     tuanNum={d.TuanOrderCount}
          />
        }
        <Bar data={d.Introduce} listData={d.CourseDataList}/>
        {
          this.state.open &&
          <DrawerList show={this.state.open}
                      data={this.state.tuanQueryList}
                      change={this.onOpenChange}
                      id={this.props.match.params.id}
          />
        }
      </div>
    );
  }
}



export default CourseDetail;