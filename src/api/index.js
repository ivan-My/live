import Https from "./http";

export const getUserInfos = (params) => Https.get("/My/GetUserProfile?", params);

export const getQueryList = (params) => Https.get("/News/QueryList", params);

//首页课程列表
export const getSumGetChannelCourseGroup = (params) => Https.get("/Sum/GetChannelCourseGroup", params);

export const getCourseChannelQueryList = (params) => Https.get("/CourseChannel/QueryList", params);

export const getCourseGroupQueryList = (params) => Https.get("/CourseGroup/QueryList", params);

export const getCourseWork = (params) => Https.get("/CourseWork/QueryList", params);

// export const getCourseWork = (params) => axios.get('/CourseWork/QueryList', params:params)

export const getEnterCourseGroup = (params) => Https.get("/My/EnterCourseGroup", params);

//课程详情团列表
export const getTuanQueryList = (params) => Https.get("/Tuan/QueryList", params);


export const getCourseWorkQueryById = (params) => Https.get("/CourseWork/QueryById", params);


//评论列表
export const getCommentQueryList = (params) => Https.get("/Comment/QueryList", params);


export const getIsLike = (params) => Https.get("/My/IsLike", params);

//点赞成功
export const getAddLike = (params) => Https.get("/My/AddLike", params);

//取消成功
export const getRemoveLike = (params) => Https.get("/My/RemoveLike", params);

//添加评论
export const getAddComment = (params) => Https.get("/My/AddComment", params);
