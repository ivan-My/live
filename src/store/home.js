import { getQueryList, getCourseChannelQueryList, getCourseGroupQueryList, getSumGetChannelCourseGroup } from "../api";

const types = {
  BANNer_DATA: "banner_data",
  COURSE_TABS: "course_Tabs",
  TOGGLE_SCROLL_TOP: "toggle_scroll_top",
  SELECT_BAR: "select_bar",
  GROUP: "group"
};

const defaultState = {
  bannerData: [],
  tabsData: [],
  selectedTab: 1,
  scrollLoad: false,
  group:[],
  group1:[],
  group2:[],
};

const addGroupList = (state, action) => {
  return { ...state,
    group: action.payload.DataCourseGroup_Hot.Data.Data ,
    group1: action.payload.DataCourseGroup_New.Data.Data,
    group2: action.payload.DataCourseGroup_New.Data.Data
  };
};
export const homeRedurces = (state = defaultState, action) => {
  switch (action.type) {
    case types.BANNer_DATA:
      return { ...state, bannerData: action.payload };
    case types.COURSE_TABS:
      return { ...state, tabsData: action.payload };
    case types.TOGGLE_SCROLL_TOP:
      return { ...state, scrollLoad: action.show };
    case types.SELECT_BAR:
     return { ...state, selectedTab: action.index };
    case types.GROUP:

      return addGroupList(state, action);
    default:
      return state;
  }
};

export const actions = {
  banner: (params) => {
    return {
      payload: params,
      type: types.BANNer_DATA
    };
  },
  courseTabs: (params) => {
    return {
      payload: params,
      type: types.COURSE_TABS
    };
  },

  toggleTopShow: (show) => ({
    type: types.TOGGLE_SCROLL_TOP,
    show
  }),
  selectBar: (index) => ({
    type: types.SELECT_BAR,
    index
  }),
  group: (params) => {
    return {
      payload: params,
      type: types.GROUP
    };
  }
};

export const getSumGetChannelCourseGroupData = (params) => {
  return (dispatch) => {
    getSumGetChannelCourseGroup(params).then(res => {
      dispatch(actions.group(res.Data));
    });
  };
};

export const getQueryListData = (params) => {
  return (dispatch) => {
    getQueryList(params).then(res => {
      dispatch(actions.banner(res.Data.Data));
    });

  };
};


export const getCourseTabsData = (params) => {
  return (dispatch) => {
    getCourseChannelQueryList(params).then(res => {
      dispatch(actions.courseTabs(res.Data));
    });
  };
};

