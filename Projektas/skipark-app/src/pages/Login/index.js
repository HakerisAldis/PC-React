import React from 'react';
import Background from '../../components/layout/Background';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

const Login = () => {
    return (
        <Background>
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 mb-4">
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" for="username">
                            El. paštas
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="username" type="email" placeholder="El. paštas" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-black text-sm font-bold mb-2" for="password">
                            Slaptažodis
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="password" type="password" placeholder="Slaptažodis" />
                    </div>
                    <div className="flex justify-center grid grid-rows-2">
                        <Link to={ROUTES.LOGIN} className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 mx-4 mb-4 rounded text-center">
                            Prisijungti
                        </Link>
                        <Link to={ROUTES.LOGIN} className="align-baseline font-bold text-sm text-gray-700 hover:text-gray-900 mb-0 pb-0">
                            Pamiršote slaptažodį?
                        </Link>
                    </div>
                </form>
            </div>
        </Background>
    )
}

export default Login