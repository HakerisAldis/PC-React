import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../constants/contexts';

export default function withUserLogedIn (Component) {
  return function WrappedComponent (props) {
    const user = useContext(UserContext);

    if (user) {
      return <Navigate to="/" />;
    }

    if (typeof user !== 'undefined') {
      return <Component {...props} />;
    }

    return null;
  };
}
