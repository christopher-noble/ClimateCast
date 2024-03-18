import React from 'react';
import Image from 'next/image';
import '@/styles/search-button-styles.css';
import { SEARCH_ICON_WIDTH_HEIGHT } from '@/utils/constants';

/**
 * SearchButton component renders a submit button specifically designed for initiating search operations.
 * The button displays a search icon, leveraging the `Image` component from Next.js for optimized image loading.
 */

const SearchButton: React.FC = () => {
    return (
        <button type="submit" className="search-button">
            <Image src="/search.png" alt="Search" width={SEARCH_ICON_WIDTH_HEIGHT} height={SEARCH_ICON_WIDTH_HEIGHT} />
        </button>
    )
}

export default SearchButton;