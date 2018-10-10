import { fromJS } from "immutable";
import { getCourseWork } from "../api";

export const types = {
  COURSE_WORK: "course_work",
  TAB_Index: "tab_index",
  ADD_VIDEOURL: "add_videoUrl"
};

const defaultState = fromJS({
  data: [],
  tabIndex: 0,
  OrderType: 0,
  pageIndex: 1,
  pageSize: 5,
  isLoading: true,
  videoUrl: ""
});

export const workerRedurces = (state = defaultState, action) => {
  switch (action.type) {
    case types.COURSE_WORK:
      const datas = state.getIn([ "data"]).toJS();
      const data = datas.concat(action.payload);
      return state.merge({
        data: data,
        pageIndex: action.pageIndex,
        tabIndex: action.tabIndex
      });
    case types.TAB_Index:
      return state.merge({
        data: [],
        pageIndex: 1,
        tabIndex: action.tabIndex
      });
    case types.ADD_VIDEOURL:
      return state.set('selectedTab', action.payload.url);
    default:
      return state;
  }
};

export const actions = {
  courseWorks: (params, pageIndex, tabIndex) => {
    return {
      payload: params,
      pageIndex: pageIndex,
      tabIndex: tabIndex,
      type: types.COURSE_WORK
    };
  },
  tabsIndex: (params) => {
    return {
      payload: params,
      type: types.TAB_Index
    };
  },
  videoAlert: (params) => {
    return {
      payload: params,
      type: types.ADD_VIDEOURL
    };
  }
};

export const getCourseWorkData = (params, pageIndex, tabIndex) => {
  return (dispatch) => {
    getCourseWork(params).then(res => {
      dispatch(actions.courseWorks(res.Data.Data, pageIndex, tabIndex));
    });

  };
};

export const getTabIndex = (params) => {
  return (dispatch) => {
    dispatch(actions.tabsIndex(params));
  };
};

export const getvideoUrl = (params) => {
  return (dispatch) => {
    dispatch(actions.videoAlert(params));
  };
};