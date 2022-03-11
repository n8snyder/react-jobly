import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import Companies from "./Companies";
import CompanyDetails from "./CompanyDetails";
import Jobly from "./Jobly";
import Jobs from "./Jobs";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm";
import UserContext from "./userContext";

/** Routes
 * 
 * App -> Routes -> {Jobly, Companies, Jobs, CompanyDetails}
 */

function Routes({ logIn, signUp, updateUser }) {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/" >
        <Jobly />
      </Route>
      {!user &&
        <>
          <Route exact path="/signup" >
            <SignUpForm signUpUser={signUp} />
          </Route>
          <Route exact path="/login" >
            <LoginForm loginUser={logIn} />
          </Route>
          <Redirect to="/login" />
        </>
      }
      {user &&
        <>
          <Route exact path="/profile" >
            <ProfileForm updateUser={updateUser} />
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
        </>
      }
    </Switch >
  );
}

export default Routes;