import Home from "../pages/Home";
import Cart from "../pages/Cart";

import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/cart"}>
        <Cart />
      </Route>
    </Switch>
  );
}
