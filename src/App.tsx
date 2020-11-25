import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const DreamPage = lazy(() => import("./pages/DreamPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dream/:id" component={DreamPage} />
          <Route exact path="/auth/signin" component={SignInPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
