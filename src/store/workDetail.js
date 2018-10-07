import { getCourseWorkQueryById, getCommentQueryList } from "../api";
import { fromJS } from 'immutable';

const types = {
    INIT_COURSEWORK: 'init_courseWork',
    ININ_COMMENTLIST: 'init_commentList',

};

const defaultState = fromJS({
    queryList: {},
    commentlist: [],
});

export const workDetailReducers = (state = defaultState, action) => {
    switch (action.type) {
        case types.INIT_COURSEWORK:
            return state.merge({
                queryList: fromJS(action.payload),
            });
        case types.ININ_COMMENTLIST:
            return state.merge({
                commentlist: fromJS(state.get('commentlist').concat(action.payload)),
            });
        default:
            return state;
    }
};

export const actions = {
    queryList: (params) => {
        return {
            payload: params,
            type: types.INIT_COURSEWORK,
        }
    },
    commentlist: (params) => {
        return {
            payload: params,
            type: types.ININ_COMMENTLIST,
        }
    }
};

export const getCommentQueryListData = (params) => {
    return (dispatch) => {
        getCommentQueryList(params).then(res => {
            dispatch(actions.commentlist(res.Data.Data))
        })
    };
};

export const getCourseWorkQueryByIdData = (params) => {
    return (dispatch) => {
        getCourseWorkQueryById(params).then(res => {
            dispatch(actions.queryList(res.Data))
        })
    };
};

