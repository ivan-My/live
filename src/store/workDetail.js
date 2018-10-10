import { getCourseWorkQueryById, getCommentQueryList, getIsLike, getRemoveLike, getAddLike } from "../api";
import { fromJS } from "immutable";
import { Toast } from "antd-mobile";
import { CLEAR_STATE } from "./clearState";

const types = {
  INIT_COURSEWORK: "init_courseWork",
  ININ_COMMENTLIST: "init_commentList",
  INIT_ISLIKE: "init_isLike",
  TOGGLE_INPUT: "toggle_input",
  ADD_LIKE: "add_like",
  REMOVE_LIKE: "remove_like",
  TOGGLE_ISLIKE: "toggle_isLike"
};

const defaultState = fromJS({
  queryList: {},
  commentlist: [],
  isInput: false,
  isLike: false
});

//点赞自+ ，自-
function toggleIsLike(state, action) {
  const queryList = state.get("queryList").toJS();
  let likeCnt = state.get("queryList").toJS().LikeCnt;
  state.get("isLike") ? likeCnt-- : likeCnt++;
  queryList.LikeCnt = likeCnt;
  return state.merge({
    isLike: fromJS(!state.get("isLike")),
    queryList: fromJS(queryList)
  });
}

export const workDetailReducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.INIT_COURSEWORK:
      return state.merge({
        queryList: fromJS(action.payload)
      });
    case types.ININ_COMMENTLIST:
      return state.merge({
        commentlist: fromJS(state.get("commentlist").concat(action.payload))
      });
    case types.TOGGLE_INPUT:
      return state.merge({
        isInput: fromJS(!state.get("isInput"))
      });
    case types.INIT_ISLIKE:
      return state.merge({
        isLike: fromJS(action.payload)
      });
    case types.TOGGLE_ISLIKE:
      return toggleIsLike(state, action);
    case CLEAR_STATE:
      return defaultState;
    default:
      return state;
  }
};

export const actions = {
  queryList: (params) => {
    return {
      payload: params,
      type: types.INIT_COURSEWORK
    };
  },
  commentlist: (params) => {
    return {
      payload: params,
      type: types.ININ_COMMENTLIST
    };
  },
  toggleInput: () => {
    return {
      type: types.TOGGLE_INPUT
    };
  },
  isLike: (params) => {
    return {
      payload: params,
      type: types.INIT_ISLIKE
    };
  },
  toggleIsLike: () => {
    return {
      type: types.TOGGLE_ISLIKE
    };
  }

};


export const getCourseWorkQueryByIdData = (params) => {
  return (dispatch) => {
    getCourseWorkQueryById(params).then(res => {
      dispatch(actions.queryList(res.Data));
    });
  };
};

//评论
export const getCommentQueryListData = (params) => {
  return (dispatch) => {
    getCommentQueryList(params).then(res => {
      dispatch(actions.commentlist(res.Data.Data));
    });
  };
};
//点赞状态
export const getIsLikeData = (params) => {
  return (dispatch) => {
    getIsLike(params).then(res => {
      dispatch(actions.isLike(res.Data));
    });
  };
};

//取消点赞
export const getRemoveLikeData = (params) => {
  return (dispatch) => {
    getRemoveLike(params).then(res => {

      Toast.info("取消成功", 1);
      dispatch(actions.toggleIsLike());
    });
  };
};
//点赞成功
export const getAddLikeData = (params) => {
  return (dispatch) => {
    getAddLike(params).then(res => {
      Toast.info("点赞成功", 1);
      dispatch(actions.toggleIsLike());
    });
  };
};