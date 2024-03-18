"use client"

import * as React from "react"
import Link from "next/link"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"
import SearchBar from "../search-bar"
import Image from 'next/image';
import { DEFAULT_CITY } from "@/utils/constants"
import { CityProps } from "@/utils/interfaces/page-props"

const navigation = [
  { name: 'Settings', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const NavBar: React.FC<CityProps> = ({ params }) => {
  return (
    <Disclosure as="nav" className="bg-blue-950">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href={`/dashboard/${params.city || DEFAULT_CITY}`}>
                    <Image
                      className="h-18 w-48 hidden md:block"
                      src="/logo.png"
                      alt="Your Company"
                      width={500}
                      height={200}
                    />
                  </Link>
                </div>
              </div>
              <div>
                <div className="ml-0 items-center md:ml-0 hidden md:block">
                  <SearchBar responsiveWidth={false} />
                  {/* Profile dropdown
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={''} alt="" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {navigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu> */}
                </div>
              </div>
              <div className="mr-auto ml-auto flex md:hidden">
                {/* Mobile menu button */}
                <SearchBar responsiveWidth={true} />
                {/*
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-primary p-2 text-gray-400 hover:bg-gray-700 hover:text-colour-secondary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="mt-3 space-y-1 px-2">

                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-colour-secondary"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar;
