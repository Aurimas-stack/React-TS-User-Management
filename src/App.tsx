import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { UserContextProvider } from "./components/UserContext";

import { Routes } from "./constants";
import PublicRoute from "./components/PublicRoute";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute";
import UsersManagement from "./components/UsersManagement/UsersManagement";

import "./style/styles.scss";

const App = (): JSX.Element => (
  <Router>
    <Switch>
      <PublicRoute path={Routes.Login} component={Login} />
      <PrivateRoute
        path={Routes.Users}
        component={() => (
          <UserContextProvider>
            <UsersManagement />
          </UserContextProvider>
        )}
      />
      <PrivateRoute
        path={Routes.Root}
        component={() => <Redirect to={Routes.Login} />}
      />
    </Switch>
  </Router>
);

export default App;
