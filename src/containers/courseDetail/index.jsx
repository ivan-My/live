import React from "react";
import { getEnterCourseGroup, getTuanQueryList } from "../../api";
import { setTitle } from "../../utils/utils";
import TopCon from "./TopCon";
import GroupList from "./GroupList";
import Bar from "./Bar";
import DrawerList from "./DrawerList";

/**
 * @constructor <CourseDetail />
 * @description 课程详情页
 */

class CourseDetail extends React.Component {
  state = {
    data: {},
    tuanQueryList: [],
    open: false
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    getEnterCourseGroup({
      CourseGroupId: id
    }).then(res => {
      this.setState({
        data: res.Data
      });
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
      console.log(this.state.open);
    });
  };

  render() {
    const d = this.state.data;
    if (Object.keys(d).length === 0) {
      return null;
    }
    setTitle(d.CourseGroupName);
    return (
      <div>
        <TopCon d={d}/>
        {
          d.TuanOrderList.length > 0 ? <GroupList data={d.TuanOrderList}
                                                  change={this.onOpenChange}
                                                  show={this.state.open}
          /> : null
        }
        <Bar data={d.Introduce}
             listData={d.CourseDataList}
        />
        {
          this.state.open ?
            <DrawerList show={this.state.open}
                        data={this.state.tuanQueryList}
                        change={this.onOpenChange}
            /> : null
        }
      </div>
    );
  }
}

export default CourseDetail;