'use client';

import { Provider } from 'jotai';
import { usePathname } from 'next/navigation';
import { extractCity } from '@/utils/helpers';
import Dashboard from './dashboard/[city]/page';

const Home = () => {
  const pathname = usePathname();
  return (
    <main>
      <Provider>
        <Dashboard params={{
          city: extractCity(pathname)
        }}>
        </Dashboard>
      </Provider>
    </main>
  );
}

export default Home;
