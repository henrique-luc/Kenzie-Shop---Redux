import Home from "../pages/Home";
import CartPage from "../pages/CartPage";

import { Switch, Route, Redirect } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/cart"}>
        <CartPage />
      </Route>
    </Switch>
  );
}
