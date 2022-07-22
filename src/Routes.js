import { Switch, Route, Redirect } from "react-router-dom";
import Companies from "./Companies";
import CompanyDetails from "./CompanyDetails";
import Jobly from "./Jobly";
import Jobs from "./Jobs";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm";
import PrivateRoute from "./PrivateRoute";
import LoggedOutRoute from "./LoggedOutRoute";


/** Routes
 * 
 * App -> Routes -> {Jobly, Companies, Jobs, CompanyDetails}
 */

function Routes({ logIn, signUp, updateUser }) {

  return (
    <Switch>
      <Route exact path="/" >
        <Jobly loginUser={logIn} />
      </Route>
      <LoggedOutRoute exact path="/signup" >
        <SignUpForm signUpUser={signUp} />
      </LoggedOutRoute>
      <LoggedOutRoute exact path="/login" >
        <LoginForm loginUser={logIn} />
      </LoggedOutRoute>

      {/* <Redirect to="/login" /> */}

      <PrivateRoute exact path="/profile" >
        <ProfileForm updateUser={updateUser} />
      </PrivateRoute>
      <PrivateRoute exact path="/companies" >
        <Companies />
      </PrivateRoute>
      <PrivateRoute exact path="/jobs" >
        <Jobs />
      </PrivateRoute>
      <PrivateRoute exact path="/companies/:handle" >
        <CompanyDetails />
      </PrivateRoute>

      <Redirect to="/" />
    </Switch >
  );
}

export default Routes;