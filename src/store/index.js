import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { homeRedurces } from "./home";
import { workerRedurces } from "./works";
import { userInfoRedurces } from "./userInfos";
import { workDetailReducers } from "./workDetail";
import { globalRedurces } from "./global";
import {courseDetailRedurces} from './courseDetail.js';
import {otherCourseRedurces} from "./otherCourse";


const store = createStore(
  combineReducers({
    global: globalRedurces,
    home: homeRedurces,
    works: workerRedurces,
    userInfos: userInfoRedurces,
    worksDetail: workDetailReducers,
    courseDetail: courseDetailRedurces,
    otherCourse:otherCourseRedurces
  }), compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

export default store;