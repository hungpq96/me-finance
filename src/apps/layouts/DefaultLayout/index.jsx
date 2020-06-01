import React from "react";
import { Route } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { FlexLayout, ComponentWrapper } from "./styles";

const DefaultLayout = ({ component: Component, path }) => (
  <Route path={path}>
    <FlexLayout className="bp3-dark">
      <Sidebar />
      <ComponentWrapper>
        <Component />
      </ComponentWrapper>
    </FlexLayout>
  </Route>
);

export default DefaultLayout;
