import {FC} from 'react';
import {Route, RouteProps, useHistory} from 'react-router-dom';

import {Routes} from '~/constants';

const PrivateRoute: FC<RouteProps> = ({
  path,
  component,
}): JSX.Element => {
  const {push} = useHistory();
  const token: string = localStorage.getItem('token');

  if (!token) {
    push(Routes.Login);
  }

  return <Route path={path} component={component}/>
};

export default PrivateRoute;
