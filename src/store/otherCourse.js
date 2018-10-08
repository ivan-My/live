import { getCourseGroupQueryList } from "../api";
import { actions } from "./home";

const types = {
  INIT_OTHER_COURSE: "init_other_course"
};

const defaultState = {
  otherCourseData: []
};

export const otherCourseRedurces = (state = defaultState, action) => {
  switch (action.type) {
    case types.INIT_OTHER_COURSE:
      return { ...state, otherCourseData: action.payload };
    default:
      return state;
  }
};

export const action= {
  initData: (params) => {
    return {
      payload: params,
      type: types.INIT_OTHER_COURSE
    };
  }
};

export const getCourseGroupQueryListData = (params) => {
  return (dispatch) => {
    getCourseGroupQueryList(params).then(res => {
      dispatch(action.initData(res.Data.Data));
    });
  };
};