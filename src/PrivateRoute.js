import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "./userContext";

/** Private route that wraps routes that require login
 */

function PrivateRoute({ exact, path, children }) {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
