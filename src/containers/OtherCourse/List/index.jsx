import React from "react";
import { connect } from "react-redux";
import { ListView } from "antd-mobile";
import { CourseList } from "../../../components/CourseList";
import { getCourseGroupQueryListData } from "../../../store/otherCourse";
import { clearState } from "../../../store/clearState";

/**
 * @constructor <List_tpl/>
 * @description <课程列表>
 */


function mapStateToProps(state) {
  return {
    otherCourseData: state.getIn(["otherCourse", "otherCourseData"]).toJS()
  };
}

const mapDispatchToProps = (dispatch) => ({
  clearState: () => dispatch(clearState()),
  getCourseGroupQueryListData: (params) => dispatch(getCourseGroupQueryListData(params))
});


@connect(
  mapStateToProps,
  mapDispatchToProps
)
class List extends React.Component {
  componentDidMount() {
    this.props.getCourseGroupQueryListData({
      HostAccountId: this.props.id,
      pageIndex: 1,
      pageSize: 8
    });
  }

  componentWillUnmount() {
    this.props.clearState();
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

