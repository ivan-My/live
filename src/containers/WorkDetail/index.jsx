import React from "react";
import { setTitle } from "../../utils/utils";
import { connect } from "react-redux";
import { getCourseWorkQueryByIdData } from "../../store/workDetail";
import BackHome from "../../components/BackHome";
import Header from "./Header";
import TeachList from "./TeachList";
import TopicList from "./TopicList";
import FooterBtn from "./FooterBtn";
import FooterInput from "./FooterInput";
import DocumentTitle from "react-document-title";


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
        {/*<DocumentTitle title={queryList.Title } />*/}
        <BackHome/>
        <Header data={queryList}/>
        <TeachList data={queryList.TeacherCommentDataList}/>
        <TopicList id={this.props.match.params.id}/>
        <FooterBtn id={this.props.match.params.id} change={this.changeInput}/>
        {this.state.isInput ? <FooterInput id={this.props.match.params.id} change={this.changeInput}/> : null}
      </div>
    );
  }
}

export default WorkDetail;