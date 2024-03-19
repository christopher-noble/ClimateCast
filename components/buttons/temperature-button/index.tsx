import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { NAV_ICON_WIDTH_HEIGHT } from '@/utils/constants';
import '@/styles/header-icon-styles.css'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useAtom } from 'jotai';
import { temperatureUnitAtom } from '@/store';

const activeClassNames = (active: boolean, classes: string) => {
  return `${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} ${classes}`;
};

/**
 * Refresh button to refresh the weather dashboard
 */

const TemperatureButton = () => {
  const [temperatureUnit, setTemperatureUnit] = useAtom(temperatureUnitAtom);
  const router = useRouter();

  const handleUnitChange = (unit: string) => {
    setTemperatureUnit(unit);
  };

  return (
    <main>
      <Menu as="div" className="relative inline-block text-left pl-8">
        <div>
          <Menu.Button className="button-hover">
            <Image
              src="/temperature.svg"
              alt="ClimateCast"
              width={NAV_ICON_WIDTH_HEIGHT}
              height={NAV_ICON_WIDTH_HEIGHT}
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
            <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleUnitChange('C')}
                    className={activeClassNames(active, 'block px-4 py-2 text-1xl font-semibold')}
                  >
                    °C
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleUnitChange('F')}
                    className={activeClassNames(active, 'block px-4 py-2 text-1xl font-semibold')}
                  >
                    °F
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </main>
  );
};

export default TemperatureButton;
