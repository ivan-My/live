import Https from "./http";

export const getUserInfos = (params) => {
  return Https.get("/My/GetUserProfile?", params);
};

export const getQueryList = (params) => {
  return Https.get("/News/QueryList", params);
};

//首页课程列表
export const getSumGetChannelCourseGroup = (params) => {
  return Https.get("/Sum/GetChannelCourseGroup", params);
};

export const getCourseChannelQueryList = (params) => {
  return Https.get("/CourseChannel/QueryList", params);
};
export const getCourseGroupQueryList = (params) => {
  return Https.get("/CourseGroup/QueryList", params);
};
export const getCourseWork = (params) => {
  return Https.get("/CourseWork/QueryList", params);
};
// export const getCourseWork = (params) => {
//    return axios.get('/CourseWork/QueryList', {params:params})
//
// };

export const getEnterCourseGroup = (params) => {
  return Https.get("/My/EnterCourseGroup", params);
};
//课程详情团列表
export const getTuanQueryList = (params) => {
  return Https.get("/Tuan/QueryList", params);
};

export const getCourseWorkQueryById = (params) => {
  return Https.get("/CourseWork/QueryById", params);
};


//评论列表
export const getCommentQueryList = (params) => {
  return Https.get("/Comment/QueryList", params);
};

export const getIsLike = (params) => {
  return Https.get("/My/IsLike", params);
};
//点赞成功
export const getAddLike = (params) => {
  return Https.get("/My/AddLike", params);
};
//取消成功
export const getRemoveLike = (params) => {
  return Https.get("/My/RemoveLike", params);
};
//添加评论
export const getAddComment = (params) => {
  return Https.get("/My/AddComment", params);
};