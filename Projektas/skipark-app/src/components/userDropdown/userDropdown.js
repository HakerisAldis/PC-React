<<<<<<< HEAD
import { userService } from '../../services/user';
import { Menu, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

const UserDropdown = ({ name }) => {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <span className="rounded-md shadow-sm">
              <Menu.Button className="inline-flex justify-center w-full leading-5 transition duration-150 ease-in-out hover:shadow-xl hover:text-white text-gray-200 py-2 px-1 mx-1 border border-gray-400 rounded">
                <span>{ name }</span>
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Menu.Button>
            </span>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 w-56 mt-2 opacity-100 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              >
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700'
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                      >
                                    Profilio nustatymai
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={userService.signOutUser}
                        className={`${
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700'
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                      >
                                    Atsijungti
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

UserDropdown.propTypes = {
  name: PropTypes.string.isRequired
};
=======
import React, { useContext } from 'react';
import { userService } from '../../services/user';
import { Menu, Transition } from '@headlessui/react';
import { UserContext } from '../../constants/contexts'


const UserDropdown = (props) => {

    const { name } = props;

    return (
        <div className="relative inline-block text-left">
            <Menu>
                {({ open }) => (
                <>
                    <span className="rounded-md shadow-sm">
                    <Menu.Button className="inline-flex justify-center w-full leading-5 transition duration-150 ease-in-out hover:shadow-xl hover:text-white text-gray-200 py-2 px-1 mx-1 border border-gray-400 rounded">
                        <span>{ name }</span>
                        <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </Menu.Button>
                    </span>

                    <Transition
                        show={open}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="absolute right-0 w-56 mt-2 opacity-100 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                        >
                            <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    className={`${
                                    active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                >
                                    Profilio nustatymai
                                </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    onClick={userService.signOutUser}
                                    className={`${
                                    active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                >
                                    Atsijungti
                                </button>
                                )}
                            </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
                )}
            </Menu>
        </div>
    );
}
>>>>>>> ba94c08257a2bc597ee233fddb32bd9de70ebfe5

export default UserDropdown;