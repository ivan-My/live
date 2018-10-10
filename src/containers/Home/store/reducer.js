const defaultState = {
  bannerData: [],
  tabsData: [],
  selectedTab: 1,
  scrollLoad: false,
  group: [],
  group1: [],
  group2: []
};

const addGroupList = (state, action) => {
  return {
    ...state,
    group: action.payload.DataCourseGroup_Hot.Data.Data,
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