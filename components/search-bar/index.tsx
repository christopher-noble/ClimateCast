'use-client'

import { useState, ChangeEvent, KeyboardEvent, FormEvent, useEffect, MouseEvent } from 'react';
import { fetchWeatherDataForCity } from '@/services/weather-service';
import { popularCities } from '@/data/popular-cities';
import { useAtom } from 'jotai';
import { currentWeatherAtom, hourlyWeatherAtom, multiDayWeatherAtom } from '@/store';
import { useRouter } from 'next/navigation'
import SearchButton from '../buttons/search-button';
import '@/app/styles/search-bar-styles.css'
import { ENTER_KEY, ERROR_MESSAGES, WEATHER_API_SUCCESS_FIELD } from '@/utils/constants';
import ErrorMessage from '../error-message';

/**
 * SearchBar component renders an input area with auto-completion. Top cities from around
 * the world are suggested based on user input.
 *
 * Props:
 * - responsiveWidth: set to true when in mobile view.
 */

interface SearchBarProps {
    responsiveWidth?: boolean; // Optional prop to control responsive width behavior
}

const SearchBar: React.FC<SearchBarProps> = ({ responsiveWidth = false }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [suggestion, setSuggestion] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);
    const [currentWeather, setCurrentWeather] = useAtom(currentWeatherAtom);
    const [hourlyWeather, setHourlyWeather] = useAtom(hourlyWeatherAtom);
    const [multiDayWeather, setMultiDayWeather] = useAtom(multiDayWeatherAtom);
    const router = useRouter();

    const inputClassName = `search-bar ${responsiveWidth ? 'justify-start sm:w-96' : 'w-96'}`;

    const updateSuggestion = (userInput: string) => {
        // Find the first city that starts with the user input
        const matchedCity = popularCities.find(city => city.toLowerCase().startsWith(userInput.toLowerCase()));

        // Set the suggestion to the rest of the matched city name (if any)
        setSuggestion(matchedCity && userInput ? matchedCity.slice(userInput.length) : '');
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const userInput = e.target.value;
        setInputValue(userInput);
        updateSuggestion(userInput);
    };

    const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        // If the user presses the Enter key, autocomplete the input with the suggestion
        if (e.key === ENTER_KEY && suggestion) {
            setInputValue(inputValue + suggestion);
            setSuggestion('');
            e.preventDefault();
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result = await fetchWeatherDataForCity(inputValue);

        if (WEATHER_API_SUCCESS_FIELD in result) {
            const flattenedHours = [
                ...result.forecast.forecastday[0].hour,
                ...result.forecast.forecastday[1].hour,
            ];

            setCurrentWeather(result);
            setHourlyWeather(flattenedHours);
            setMultiDayWeather(result.forecast.forecastday);
            router.push(`/dashboard/${inputValue}`);
            setErrorMessage('');
        }
        else {
            setShowError(true);
            setErrorMessage(ERROR_MESSAGES.INVALID_CITY)
        }

        setSuggestion('');
    };

    const handleCloseError = () => {
        setShowError(false);
    };

    return (
        <main className="relative w-full">
            <form onSubmit={handleSubmit} className="relative flex items-center w-full">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    className={inputClassName}
                    placeholder="Start typing a city..."
                />
                <div className="absolute left-0 pointer-events-none flex items-center pl-4">
                    <span>
                        {inputValue}
                        <span className="text-gray-400">{suggestion}</span>
                    </span>
                </div>
                <SearchButton />
            </form>
            <ErrorMessage showError={showError} errorMessage={errorMessage} handleCloseError={handleCloseError}/>
        </main>
    );
};

export default SearchBar;
