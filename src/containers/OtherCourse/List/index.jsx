import React from "react";
import { connect } from "react-redux";
import { ListView} from "antd-mobile";
import { CourseList } from "../../../components/CourseList";
import { getCourseGroupQueryListData } from "../../../store/otherCourse";

/**
 * @constructor <List_tpl/>
 * @description <课程列表>
 */

@connect(
  state => state.otherCourse,
  { getCourseGroupQueryListData }
)
class List extends React.Component {
  componentDidMount() {
    this.props.getCourseGroupQueryListData({
      HostAccountId: this.props.id,
      pageIndex: 1,
      pageSize: 8
    });
  }

  onEndReached = () => {
  };

  transDataSource() {
    const data = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    const dataSource = data.cloneWithRows(this.props.otherCourseData);
    return dataSource;
  }

  render() {
    const { otherCourseData } = this.props;
    return (
      <React.Fragment>
        {
          otherCourseData.length > 0 && otherCourseData.map(item => {
            return CourseList(item);
          })
        }
      </React.Fragment>
    );
  }
}

export default List;

