import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, Redirect, HashRouter } from "react-router-dom";
import "./assets/style/reset.scss";
import "./utils/rem";
import store from "./store";
import { getUserInfos } from "./api";
import FooterBar from "./components/FooterBar";
import { Home, Works, My, CourseDetail, WorkDetail, OtherCourse } from "./loadRouter";

class App extends Component {
  static onRedirct() {
    return <Redirect to="/home"/>;
  }

  componentDidMount() {
    /***
     * https://www.hihiworld.com 测试环境地址，自行微信登陆获取cookie，
     * 即可访问到所有接口信息
     * */
    let cookie = "vfdlnebp0z2c5ipegdjnoj44";
    let testCookie = "wv4kfu2cq24afhpw1jhtihbb";
    document.cookie = "ASP.NET_SessionId=" + cookie;
    getUserInfos().then(res => {
      //console.log(res.Data);
    });
  }

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <Route path="/" exact render={App.onRedirct}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/my" exact component={My}/>
            <Route path="/works" exact component={Works}/>
            <Route path="/courseDetail/:id" exact component={CourseDetail}/>
            <Route path="/otherCourse/:id" exact component={OtherCourse}/>
            <Route path="/workDetail/:id" exact component={WorkDetail}/>
            <FooterBar/>
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
