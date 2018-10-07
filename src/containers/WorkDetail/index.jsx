import React from "react";
import { setTitle } from "../../utils/utils";
import { connect } from "react-redux";
import { getCourseWorkQueryByIdData } from "../../store/workDetail";
import BackHome from "../../components/BackHome";
import Top from "./Top";
import TeachList from "./TeachList";
import TopicList from "./TopicList";
import AddBtn from "./AddBtn";
import Input from "./Input";


const mapState = (state) => ({
  queryList: state.worksDetail.getIn(["queryList"]).toJS()
});

@connect(
  mapState,
  { getCourseWorkQueryByIdData }
)
class WorkDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isInput: false
    };
    this.changeInput = this.changeInput.bind(this);
  }

  componentDidMount() {
    let workId = this.props.match.params.id;
    this.props.getCourseWorkQueryByIdData({ workId });
  };

  changeInput() {
    this.setState({
      isInput: !this.state.isInput
    });
  }

  render() {
    const { queryList } = this.props;
    setTitle(queryList.Title);
    return (
      <div className="work-detail">
        <BackHome/>
        <Top data={queryList}/>
        <TeachList data={queryList.TeacherCommentDataList}/>
        <TopicList id={this.props.match.params.id}/>
        <AddBtn id={this.props.match.params.id}
                change={this.changeInput}
        />
        {this.state.isInput ? <Input id={this.props.match.params.id} change={this.changeInput}/> : null}
      </div>
    );
  }
}

export default WorkDetail;