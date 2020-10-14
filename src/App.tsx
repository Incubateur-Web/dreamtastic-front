import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const DreamPage = lazy(() => import("./pages/DreamPage"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading....</>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dream/:id" component={DreamPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
