import { fromJS } from "immutable";

const types = {
  CHANGE_TAB: "change_tab"
};
const defaultState = fromJS({
  tabs: [
    {
      id: 0,
      tit: "发现",
      icon: "http://test.hihiworld.com/web/static/img/find.png",
      selectedIcon: "http://test.hihiworld.com/web/static/img/findon.png",
      hash: "/home"
    },
    {
      id: 1,
      tit: "作品",
      icon: "http://test.hihiworld.com/web/static/img/work.png",
      selectedIcon: "http://test.hihiworld.com/web/static/img/workon.png",
      hash: "/works"
    },
    {
      id: 2,
      tit: "我的",
      icon: "http://test.hihiworld.com/web/static/img/My.png",
      selectedIcon: "http://test.hihiworld.com/web/static/img/myon.png",
      hash: "/My"
    }
  ],
  selectedTab: 0
});

export const globalRedurces = (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_TAB:
      return state.set("selectedTab", action.payload);
    default:
      return state;
  }
};

export const action = {
  changeTab: (params) => {
    return {
      payload: params,
      type: types.CHANGE_TAB
    };
  }
};