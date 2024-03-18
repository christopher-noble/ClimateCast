import Image from 'next/image';
import '@/app/styles/search-button-styles.css';
import { SEARCH_ICON_WIDTH_HEIGHT } from '@/utils/constants';

/**
 * SearchButton component renders a submit button specifically designed for initiating search operations.
 * The button displays a search icon, leveraging the `Image` component from Next.js for optimized image loading.
 */

const SearchButton = () => {
    return (
        <button type="submit" className="search-button">
            <Image src="/search.png" alt="Search" width={SEARCH_ICON_WIDTH_HEIGHT} height={SEARCH_ICON_WIDTH_HEIGHT} />
        </button>
    )
}

export default SearchButton;