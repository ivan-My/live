import React, {
  lazy
} from "react";
import {
  Route
} from "react-router-dom";

const RouterLis = [{
  component: lazy(() =>
    import ("../containers/Home")),
  path: "/"
}, {
  component: lazy(() =>
    import ("../containers/Home")),
  path: "/home"
}, {
  component: lazy(() =>
    import ("../containers/My")),
  path: "/my"
}, {
  component: lazy(() =>
    import ("../containers/UserInfo")),
  path: "/my/userInfo"
}, {
  component: lazy(() =>
    import ("../containers/Works")),
  path: "/works"
}, {
  component: lazy(() =>
    import ("../containers/CourseDetail")),
  path: "/courseDetail/:id"
}, {
  component: lazy(() =>
    import ("../containers/OtherCourse")),
  path: "/otherCourse/:id"
}, {
  component: lazy(() =>
    import ("../containers/WorkDetail")),
  path: "/workDetail/:id"
}];

const RouterList = () => (
  RouterLis.map((item, key) => {
    return <Route key={key} exact path={item.path} component={item.component}/>;
  })
);

export default RouterList;