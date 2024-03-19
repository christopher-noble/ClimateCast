import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import { NAV_ICON_WIDTH_HEIGHT } from '@/utils/constants';
import '@/styles/header-icon-styles.css'

/**
 * Reload button to reload the weather dashboard
 */

const Reload: React.FC = () => {
    const router = useRouter();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <main>
            <button onClick={reloadPage} className='button-hover'>
                <Image
                    src="/reload.svg"
                    alt="ClimateCast"
                    width={NAV_ICON_WIDTH_HEIGHT}
                    height={NAV_ICON_WIDTH_HEIGHT}
                />
            </button>
        </main>

    );
};

export default Reload;
