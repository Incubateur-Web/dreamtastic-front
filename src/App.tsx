import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<>loading...</>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
