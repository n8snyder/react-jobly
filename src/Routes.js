import { Switch, Route, Redirect } from "react-router-dom";
import Companies from "./Companies";
import CompanyDetails from "./CompanyDetails";
import Jobly from "./Jobly";
import Jobs from "./Jobs";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm";

/** Routes
 * 
 * App -> Routes -> {Jobly, Companies, Jobs, CompanyDetails}
 */

function Routes() {
  return (
    <Switch>
      <Route exact path="/" >
        <Jobly />
      </Route>
      <Route exact path="/signup" >
        <SignUpForm />
      </Route>
      <Route exact path="/login" >
        <LoginForm />
      </Route>
      <Route exact path="/profile" >
        <ProfileForm />  
      </Route>
      <Route exact path="/companies" >
        <Companies />
      </Route>
      <Route exact path="/jobs" >
        <Jobs />
      </Route>
      <Route exact path="/companies/:handle" >
        <CompanyDetails />
      </Route>
      <Redirect to="/" />
    </Switch >
  );
}

export default Routes;