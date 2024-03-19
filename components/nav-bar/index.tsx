"use client"

import * as React from "react"
import Link from "next/link"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"
import SearchBar from "../search-bar"
import Image from 'next/image';
import { DEFAULT_CITY } from "@/utils/constants"
import { CityProps } from "@/utils/interfaces/page-props"

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
                      alt="ClimateCast"
                      width={500}
                      height={200}
                    />
                  </Link>
                </div>
              </div>
              <div>
                <div className="ml-0 items-center md:ml-0 hidden md:block">
                  <SearchBar responsiveWidth={false} />
                </div>
              </div>
              <div className="mr-auto ml-auto flex md:hidden">
                <SearchBar responsiveWidth={true} />
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar;
