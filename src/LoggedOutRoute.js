import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "./userContext";

/** Route that wraps routes that require being logged out
 */

function LoggedOutRoute({ exact, path, children }) {
  const { user } = useContext(UserContext);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default LoggedOutRoute;