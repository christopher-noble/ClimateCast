import { WEATHER_API_KEY } from "@/config/creds";
import { WeatherApiResponseError, WeatherApiResponseSuccess } from "@/utils/interfaces/weather";

/**
 * Service for GET request to WeatherAPI.com.
 * @param city the city to for current weather
 * @returns object containing the current weather and forecast for next 14 days
 */

const REPORT_TYPE = 'forecast.json';
const DAYS_FETCHED = 14;

export const fetchWeatherData = async (city: string): Promise<WeatherApiResponseSuccess | WeatherApiResponseError> => {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/${REPORT_TYPE}?key=${WEATHER_API_KEY}&q=${city}&days=${DAYS_FETCHED}&aqi=no`);
    if (!response.ok) {
      const errMsg = await response.text();
      throw new Error(`Weather data fetch failed: ${errMsg}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    let errorMessage = 'An unexpected error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      errorMessage,
    };
  }
};