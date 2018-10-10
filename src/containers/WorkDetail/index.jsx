import React from "react";
import { connect } from "react-redux";
import { setTitle } from "../../utils/utils";
import {
  actions,
  getAddLikeData,
  getCourseWorkQueryByIdData,
  getIsLikeData,
  getRemoveLikeData
} from "../../store/workDetail";
import BackHome from "../../components/BackHome";
import Header from "./Header";
import TeachList from "./TeachList";
import TopicList from "./TopicList";
import FooterBtn from "./FooterBtn";
import FooterInput from "./FooterInput";
import { clearState } from "../../store/clearState";


const mapState = (state) => ({
  queryList: state.getIn(["worksDetail", "queryList"]).toJS(),
  isInput: state.getIn(["worksDetail", "isInput"])
});

const mapDispatchToProps = (dispatch) => ({
  clearState: () => dispatch(clearState()),
  getCourseWorkQueryByIdData: (params) => dispatch(getCourseWorkQueryByIdData(params))
});

@connect(
  mapState,
  mapDispatchToProps
)
class WorkDetail extends React.Component {

  componentDidMount() {
    let workId = this.props.match.params.id;
    this.props.getCourseWorkQueryByIdData({ workId });
  };

  componentWillUnmount() {
    this.props.clearState();
  }

  render() {
    const { queryList, isInput } = this.props;
    let id = this.props.match.params.id;
    setTitle(queryList.Title);
    return (
      <div className="work-detail">
        <BackHome/>
        <Header data={queryList}/>
        <TeachList data={queryList.TeacherCommentDataList}/>
        {queryList.TeacherCommentDataList &&  <TopicList id={id}/>}
        <FooterBtn id={id} likeNum={queryList.LikeCnt}/>
        {isInput ? <FooterInput id={id}/> : null}
      </div>
    );
  }
}

export default WorkDetail;