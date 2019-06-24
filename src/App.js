import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import routes from "./routes";
import store from "./createStore";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            {routes.map(route => (
              <Route {...route} />
            ))}
          </Suspense>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
