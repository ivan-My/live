import React from "react";
import { Route, HashRouter } from "react-router-dom";
import FooterBar from "../components/FooterBar";
import Loadable from "react-loadable";
import Loading from "../components/Loading";
import { RouterLis } from "./router";
// onRedirct() {
//   return <Redirect to="/home"/>;
// }
const Router = () => {
  return (
    <HashRouter>
      <React.Fragment>
        {
          RouterLis.map((item, key) => {
            return <Route
              exact
              key={key}
              path={item.path}
              component={Loadable({
                loader: item.component,
                loading: Loading
              })}
            />;
          })
        }
        <FooterBar />
      </React.Fragment>
    </HashRouter>
  );
};

export default Router;


