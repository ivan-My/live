import { getCourseGroupQueryList } from "../api";
import { fromJS } from "immutable";
import { CLEAR_STATE } from "./clearState";

const types = {
  INIT_OTHER_COURSE: "init_other_course"
};

const defaultState = fromJS({
  otherCourseData: []
});

export const otherCourseRedurces = (state = defaultState, action) => {
  switch (action.type) {
    case types.INIT_OTHER_COURSE:
     //return { ...state, otherCourseData: action.payload };
      return state.merge({
        otherCourseData:fromJS(action.payload)
      });
    case CLEAR_STATE:
      return defaultState;
    default:
      return state;
  }
};

export const actions = {
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
      dispatch(actions.initData(res.Data.Data));
    });
  };
};