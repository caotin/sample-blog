import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "@pages/routes";
import Spinner from "./components/Spinner";
import MainLayout from "@components/layouts/MainLayout";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <MainLayout>
      <React.Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map(({ component: Component, path, ...rest }) => {
            return <Route component={Component} path={path} key={path} {...rest} />;
          })}
        </Switch>
      </React.Suspense>
    </MainLayout>
  );
}

export default App;
