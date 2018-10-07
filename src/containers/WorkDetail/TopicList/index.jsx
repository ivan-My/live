import React from 'react';
import {connect} from 'react-redux';
import {ListView} from 'antd-mobile';
import styles from './style.scss';
import {getCourseWorkQueryByIdData, getCommentQueryListData} from "../../../store/workDetail";
import Loading from '../../../components/Loadingm';
import {List} from "../List";
import {getCommentQueryList} from '../../../api';

/**
 * @constructor <TopicList />
 * @description 详情页课程目录
 */

const mapState = (state) => ({
    commentlist: state.worksDetail.getIn(['commentlist']).toJS(),
});

@connect(
    mapState,
    {getCourseWorkQueryByIdData, getCommentQueryListData}
)

class TopicList extends React.Component {
    state = {
        data: [],
        isLoding: true,
        type: 3,
        index: 0,
        size: 5,
        hasMore: false,

    };

    componentDidMount() {
        this.getData()
    };

    onEndReached = () => {
        if (!this.state.isLoading && this.state.hasMore) {
            return;
        }
        this.setState({isLoading: true});
        this.getData()

    };

    async getData() {
        let id = this.props.id;
        let index = this.state.index;
        index++;
        const res = await getCommentQueryList({
            TargetType: this.state.type,
            pageIndex: index,
            pageSize: this.state.size,
            TargetId: id,
        });
        const data = this.state.data.concat(res.Data.Data);
        res.Data.Data.length < this.state.size ? this.setState({
            hasMore: true
        }) : null;
        this.setState({
            data,
            index,
            isLoading: false
        });
    }

    render() {
        const data = this.state.data;
        if (Object.keys(data).length === 0) {
            return null
        }
        const datas = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        const dataSource = datas.cloneWithRows(data);
        const row = (item) => {
            return List(item)
        };
        return (
            <ListView
                style={{
                    marginBottom: '1rem'
                }}
                className={styles["work-prompt"]}
                ref={el => this.lv = el}
                dataSource={dataSource}
                renderHeader={() => <div className={styles["head"]}>评论</div>}
                renderFooter={() => (<div style={{padding: 15, textAlign: 'center'}}>
                    {this.state.isLoading ? <Loading/> : '没有数据了'}
                </div>)}
                renderRow={row}
                useBodyScroll
                scrollRenderAheadDistance={1000}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={1}
            >
            </ListView>
        )
    }
}

export default TopicList;
