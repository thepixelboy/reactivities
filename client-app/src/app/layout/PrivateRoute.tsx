import React, { useContext } from 'react';
import {
  RouteProps,
  RouteComponentProps,
  Redirect,
  Route,
} from 'react-router-dom';
import { RootStoreContext } from '../stores/rootStore';
import { observer } from 'mobx-react-lite';

interface IProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>>;
}

const PrivateRoute: React.FC<IProps> = ({ component: Component, ...rest }) => {
  const rootStote = useContext(RootStoreContext);
  const { isLoggedIn } = rootStote.userStore;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to={'/'} />
      }
    />
  );
};

export default observer(PrivateRoute);
