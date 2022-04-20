import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ViewGridAddIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import { UseMyContext } from "../components/Provider";

const Navbar = () => {
  const [user, setUser] = useState(UseMyContext.user || {});
  return (
    <nav className="w-full z-50 fixed top-0 backdrop-blur-sm bg-white/20">
      <div className="flex items-center justify-between px-20 py-4 transition-all ease-in-out duration-300">
        <h1 className="text-md text-gray-900 font-semibold tracking-wider leading-4">
          Smart <span className="text-teal-600 text-2xl"> Home </span>
        </h1>
        <Menu as="div" className="relative inline-block text-left">
          <div className="flex flex-row items-center group">
            <p className="text-black w-full text-md mr-3">Welcome:</p>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black rounded-md border-2 border-gray-500/75 group-hover:border-gray-900/75 transition-all ease-in-out duration-300">
              {user.name}
              <ChevronDownIcon
                className="w-5 h-5 ml-2 -mr-1 text-teal-700 group-hover:text-teal-400 transition-all ease-in-out duration-300"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-teal-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <ViewGridAddIcon
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                    add new room
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-teal-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <LogoutIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    log out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
