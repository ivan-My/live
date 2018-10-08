import { getEnterCourseGroup,getTuanQueryList } from "../api";

const types = {
  INIT_COURSE_DETAIL: "ini_course_detail",
  INIT_TUAN_LIST:"init_tuan_list"
};

const defaultState = {
  courseDetailData: [],
  tuanListData:{}
};

export const courseDetailRedurces = (state = defaultState, action) => {
  switch (action.type) {
    case types.INIT_COURSE_DETAIL:
      return { ...state, courseDetailData: action.payload };
    case types.INIT_TUAN_LIST:
      return { ...state, tuanListData: action.payload };
    default:
      return state;
  }
};

export const actions = {
  initData: (params) => {
    return {
      payload: params,
      type: types.INIT_COURSE_DETAIL
    };
  },
  initTuanList: (params) => {
    return {
      payload: params,
      type: types.INIT_TUAN_LIST
    };
  }
};

export const getEnterCourseGroupData = (params) => {
  return (dispatch) => {
    getEnterCourseGroup(params).then(res => {
      dispatch(actions.initData(res.Data))
    });
  };
};

export const getTuanQueryListData = (params) => {
  return (dispatch) => {
    getTuanQueryList(params).then(res => {
      dispatch(actions.initData(res.Data))
    });
  };
};