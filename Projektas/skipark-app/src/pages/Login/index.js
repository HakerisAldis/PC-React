import { useCallback, useContext } from 'react';
import Background from '../../components/layout/Background';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { userService } from '../../services/user';
import { UserContext } from '../../constants/contexts';

const Login = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const handleLogin = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await userService.login(email.value, password.value);
      navigate('/');
    } catch (error) {
      alert(error);
    }
  }, [navigate]);

  return (
    <>
      {user
        ? <Navigate to="/" />
        : <Background>
          <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 mb-4" onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                                El. paštas
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="email" type="email" placeholder="El. paštas" />
              </div>
              <div className="mb-6">
                <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                                Slaptažodis
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="password" type="password" placeholder="Slaptažodis" />
              </div>
              <div className="flex justify-center grid grid-rows-2">
                <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 mx-4 mb-4 rounded text-center" type="submit">
                                Prisijungti
                </button>
                <Link to={ROUTES.LOGIN} className="align-baseline font-bold text-sm text-gray-700 hover:text-gray-900 mb-0 pb-0">
                                Pamiršote slaptažodį?
                </Link>
              </div>
            </form>
          </div>
        </Background>
      }
    </>
  );
};

export default Login;
