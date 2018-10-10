export const browser = getBrowser();

function getBrowser() {
  let ua = window.navigator.userAgent;
  /**
   * 不要随意直接在getOs中添加任何新属性，如果添加，一定要添加形如ua.match(/android [\d\.]+/i)格式的正则
   */
  let getOs = {
    android: ua.match(/android [\d]+/i),
    ios: ua.match(/(iphone|ipad|ipod|itouch);[\w\s]+[\d_]+/i),
    mac: ua.match(/mac[\w\s]+[\d_]+/i),
    windows: ua.match(/windows[\w\s]+[\d]+/i),
    ie: ua.match(/(Edge|ie|rv)[\s:][\d.]+/i),
    weixin: ua.match(/micromessenger\/[\d]+/i),
    mqqbrowser: ua.match(/mqqbrowser\/[\d]+/i),
    weibo: ua.match(/weibo[\d_]+/i),
    qq: ua.match(/qq\/[\d_]+/i),
    chrome: ua.match(/chrome[\s]+[\d_]+/i)
  };
  let tmpVersion = {};
  for (let i in getOs) {
    if (getOs.hasOwnProperty(i)) {
      if (getOs[i]) {
        let result = getOs[i][0];
        let version = result.match(/[\d_]+/)[0];
        version = version.replace(/^_+|_+$/g, "");
        version = version.replace(/_+/g, ".");
        tmpVersion[i + "V"] = version;
        getOs[i] = true;
      }
    }
  }
  getOs = Object.assign({}, getOs, tmpVersion);
  getOs.mobile = /mobile/i.test(ua) ? true : null;
  getOs.nettype = /nettype/i.test(ua) ? ua.match(/nettype\/\w+/i)[0].split("/")[1].toLowerCase() : null;
  getOs.tbs = /tbs/i.test(ua) ? ua.match(/tbs\/\d+/i)[0].split("/")[1] : null;
  if (getOs.chrome && getOs.chromeV.match(/\d+/ > 100)) {
    getOs.chrome = null;
    getOs.chromeV = null;
  }
  return getOs;
}


export const setTitle = function(title) {
  document.title = title === undefined ? document.title : title;
};

export const strArr = function(str) {
  return str.split(",");
};