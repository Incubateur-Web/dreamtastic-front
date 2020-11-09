import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
import LoginPage from "./pages/LoginPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const DreamPage = lazy(() => import("./pages/DreamPage"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dream/:id" component={DreamPage} />
          <Route exact path="/auth/signin" component={LoginPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
