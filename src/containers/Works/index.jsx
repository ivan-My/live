import React from 'react';
import {connect} from 'react-redux';
import {getCourseWorkData} from '../../store/works';
import DocumentTitle from "react-document-title";
import TopBar from './Topbar';
import List from './Lists';

@connect(
    state => state.works,
    {getCourseWorkData}
)
class Works extends React.Component {
    componentDidMount() {
        // console.log(this.props);
        // this.props.getCourseWorkData({
        //     pageIndex: this.props.pageIndex,
        //     pageSize: this.props.pageSize,
        //     OrderType: this.props.tabIndex
        // },1,this.props.tabIndex);
    }
    render() {
        return (
            <div>
                <DocumentTitle title="作品"/>
                <TopBar/>
                <List/>
            </div>
        );
    }
}

export default Works;

