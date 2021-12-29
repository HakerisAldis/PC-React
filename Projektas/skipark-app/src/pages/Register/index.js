import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../../components/layout/Background'
import { ROUTES } from '../../routes'

const Register = () => {
    return (
        <Background>
            <div className="w-full max-w-lg">
                <form class="bg-white shadow-md rounded px-8 pt-6 mb-4">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Vardas
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Vardas" />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Pavardė
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Pavardė" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                El. paštas
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="El. paštas" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                Miestas
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option selected hidden>Pasirinkite</option>
                                    <option>Vilnius</option>
                                    <option>Kaunas</option>
                                    <option>Klaipėda</option>
                                </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Slaptažodis
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                        </div>
                    </div>
                    <div className="flex justify-center grid grid-rows-2 mt-8">
                        <Link to={ROUTES.REGISTER} className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 mx-4 mb-4 rounded text-center">
                            Registruotis
                        </Link>
                        <Link to={ROUTES.LOGIN} className="align-baseline font-bold text-sm text-gray-700 hover:text-gray-900 mb-0 pb-0 text-center">
                            Jau turite paskyrą?
                        </Link>
                    </div>
                </form>
            </div>
        </Background>
    )
}

export default Register
