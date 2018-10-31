export const RouterLis = [
  {
    component: () => import("../containers/Home"),
    path: "/home"
  },
  {
    component: () => import("../containers/My"),
    path: "/my"
  },
  {
    component: () => import("../containers/UserInfo"),
    path: "/my/userInfo"
  },
  {
    component: () => import("../containers/Works"),
    path: "/works"
  },
  {
    component: () => import("../containers/CourseDetail"),
    path: "/courseDetail/:id"
  },
  {
    component: () => import("../containers/OtherCourse"),
    path: "/otherCourse/:id"
  },
  {
    component: () => import("../containers/WorkDetail"),
    path: "/workDetail/:id"
  }
];
