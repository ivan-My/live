import React, { Suspense } from "react";
import { Route, HashRouter, Redirect } from "react-router-dom";
import FooterBar from "../components/FooterBar";
import Loading from "../components/Loading";
import RouterList from "./routes";

const Router = () => (
  <HashRouter>
    <Suspense fallback={<Loading />}>
      <React.Fragment>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <RouterList />
        <FooterBar />
      </React.Fragment>
    </Suspense>
  </HashRouter>
);

export default Router;


