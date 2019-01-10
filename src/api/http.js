import axios from "axios";
import { Toast } from "antd-mobile";

const config = {
  server: "//www.hihiworld.com/Live",
  host: "www.hihiworld.com",
  upload: "//upload.hihiworld.com",
  ws: "wss://socket.hihiworld.com/ws"
};
const successCode = 0;
let httpNum = 0;
const instance = axios.create({
  baseURL: "/Live",
  withCredentials: true // 跨域类型时是否在请求中协带cookie,
});

instance.interceptors.request.use(function(config) {
  if (httpNum === 0) {
    // Toast.loading("Loading...", 0);
  }
  httpNum++;
  return config;
});
instance.interceptors.response.use(function(config) {
  if (httpNum <= 0) return;
  httpNum--;
  if (httpNum === 0) {
    Toast.hide();
  }
  return config;
});

export default class Https {
  static get(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance.get(url, {
        params
      }).then(({ data }) => {
        if (data.Code === successCode) {
          resolve(data);
        } else if (data.Code === -102) {
          //window.location.href = config.server + "/account/loginwx?rurl=" + window.location.href.split("#")[1]
          const result = data.Message || data;
          resolve({ data: result });
        } else {
          console.log(data);
          reject({ err: data.Message, name: data.name || "" });
        }
      }).catch((err) => {
        console.log(err);
        reject({ err: JSON.stringify(err) });
      });
    });
  }

  static post(url, params = {}) {
    return new Promise((resolve, reject) => {
      const data = params !== null ? params : null;
      instance.post(url, data).then(({ data }) => {
        if (data.status === successCode || data.status === undefined) {
          const result = data.data || data;
          resolve({ data: result });
        } else if (data.status === -2) {
          const result = data.data || data;
          resolve({ data: result });
        } else {
          reject({ err: data.errmsg, name: data.name || "" });
        }
      }).catch((err) => {
        reject({ err: JSON.stringify(err) });
      });
    });
  }
}