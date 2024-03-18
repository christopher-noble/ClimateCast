/**
 * If a string is more than two words, return the first two words.
 */
export const formatWeatherDescription = (str: string): string => {
    const words = str?.split(' ');
    if (words.length > 2) {
        return words.slice(0, 2).join(' ');
    }
    return str;
}

/**
 * Extract the city name from a URL path.
 */
export const extractCity = (path: string): string | any => {
    const parts = path?.split('/');
    const city = parts?.pop();
    if (!city || city === '' || city == '/') {
        return null;
    }

    return city;
}

/**
 * Round numbers, by default to 0 decimals.
 */
export const roundNumber = (num: number, decimals: number = 0): number => {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
};
