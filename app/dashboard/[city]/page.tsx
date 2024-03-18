"use client"

import { useEffect, useState } from 'react'
import CurrentWeatherCard from '@/components/cards/current-weather-card'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { currentWeatherAtom, hourlyWeatherAtom, multiDayWeatherAtom } from '@/store'
import { useAtom } from 'jotai'
import SevenDayCard from '@/components/cards/seven-day-card'
import { fetchWeatherDataForCity } from '@/services/weather-service'
import HourlyCard from '@/components/cards/hourly-card'
import { isFutureHour } from '@/utils/dateTimeFormatter'
import FourteenDayCard from '@/components/cards/fourteen-day-card'
import LoadingSpinner from '@/components/loading-spinner'
import { WeatherApiResponseSuccess, ForecastDay, HourlyWeather } from '@/utils/interfaces/weather'
import NavBar from '@/components/nav-bar'
import { DEFAULT_CITY, ERROR_MESSAGES, FORECAST_START, FOURTEEN_DAY_FORECAST_END, SEVEN_DAY_FORECAST_END, WEATHER_API_SUCCESS_FIELD } from '@/utils/constants'
import { CityProps } from '@/utils/interfaces/page-props'

/**
 * Dashboard page component that displays weather information for a specified city.
 * This component fetches weather data for the default city or the city provided in the URL parameters.
 * It displays the current weather, hourly forecasts for the next 24 hours, and multi-day forecasts
 * for 7 and 14 days. It utilizes several child components to render various weather details,
 * including `CurrentWeatherCard`, `HourlyCard`, `SevenDayCard`, and `FourteenDayCard`.
 *
 * Props:
 * - `params`: An object containing a city property for route parameters.
 */

const Dashboard: React.FC<CityProps> = ({ params }) => {
    const [currentWeather, setCurrentWeather] = useAtom<WeatherApiResponseSuccess | null>(currentWeatherAtom);
    const [hourlyWeather, setHourlyWeather] = useAtom<HourlyWeather[] | null>(hourlyWeatherAtom);
    const [multiDayWeather, setMultiDayWeather] = useAtom<ForecastDay[] | null>(multiDayWeatherAtom);
    const [loadingState, setLoadingState] = useState<boolean>(true);
    const [error, setError] = useState<string | null>('');

    useEffect(() => {
        if (currentWeather === null) {
            const fetchDefaultWeather = async (): Promise<void> => {
                const result = await fetchWeatherDataForCity(params.city || DEFAULT_CITY);
                if (WEATHER_API_SUCCESS_FIELD in result) {
                    setCurrentWeather(result);
                    setLoadingState(false);
                    const flattenedHours = [
                        ...result?.forecast.forecastday[0].hour,
                        ...result?.forecast.forecastday[1].hour,
                    ];
                    setHourlyWeather(flattenedHours);
                    setMultiDayWeather(result.forecast.forecastday);
                }
                else {
                    setError(ERROR_MESSAGES.INVALID_CITY);
                }
            }
            fetchDefaultWeather();
        }
        else {
            setLoadingState(false);
        }
    }, []);

    return (
        <>
            <div className="min-h-full">
                <NavBar params={{
                    city: params.city
                }} />
                {loadingState ?
                    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-200 bg-opacity-50 z-50 flex justify-center items-center">
                        <LoadingSpinner />
                        <div className="min-h-dvh"></div>
                    </div>
                    :
                    <>
                        <header className="bg-blue-50 shadow">
                            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                                {currentWeather?.location?.name ?
                                    <h1 className="subheading-primary">{`${currentWeather.location.name}, ${currentWeather.location.region}, ${currentWeather.location.country}`}</h1>
                                    : <LoadingSpinner />
                                }
                            </div>
                        </header>
                        <main>
                            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                                <div className="w-full min-h-screen bg-gradient-to-t from-white to-blue-100 dark:from-blue-400 dark:to-blue-500 shadow-lg rounded-lg p-4">
                                    <br></br>
                                    {currentWeather ?
                                        <CurrentWeatherCard
                                            date={currentWeather.current.last_updated}
                                            description={currentWeather.current.condition.text}
                                            temperature={currentWeather.current.temp_c}
                                            iconUrl={currentWeather.current.condition.icon}
                                            feelsLike={currentWeather.current.feelslike_c}
                                            uvIndex={currentWeather.current.uv}
                                            visibility={currentWeather.current.vis_km}
                                            precipitation={currentWeather.current.precip_mm}
                                            humidity={currentWeather.current.humidity}
                                            windDegreee={currentWeather.current.wind_degree}
                                            windDirection={currentWeather.current.wind_dir}
                                            highTemp={currentWeather.forecast.forecastday[0].day.maxtemp_c}
                                            lowTemp={currentWeather.forecast.forecastday[0].day.mintemp_c}
                                            sunrise={currentWeather.forecast.forecastday[0].astro.sunrise}
                                            sunset={currentWeather.forecast.forecastday[0].astro.sunset}>
                                        </CurrentWeatherCard>
                                        :
                                        <LoadingSpinner />
                                    }
                                    <h1 className="label-primary">Hourly</h1>
                                    <ScrollArea className="w-full whitespace-nowrap rounded-md">
                                        <div className="flex w-max space-x-4">
                                            <div className="flex justify-center items-center flex-wrap">
                                                {hourlyWeather ? hourlyWeather.map((element, index) => (
                                                    isFutureHour(element.time) ?
                                                        <HourlyCard
                                                            key={index}
                                                            hour={element.time}
                                                            temp={element.temp_c}
                                                            iconUrl={element.condition.icon}
                                                            description={element.condition.text} /> : ''
                                                ))
                                                    : <LoadingSpinner />
                                                }
                                            </div>
                                        </div>
                                        <ScrollBar orientation="horizontal" />
                                    </ScrollArea>
                                    <h1 className="label-primary">7 Day Trend</h1>
                                    <ScrollArea className="w-full whitespace-nowrap rounded-md">
                                        <div className="scroll-area-primary">
                                            <div className="flex justify-evenly items-center flex-wrap">
                                                {multiDayWeather ? multiDayWeather.slice(FORECAST_START, SEVEN_DAY_FORECAST_END).map((element, index) => (
                                                    <SevenDayCard
                                                        key={index}
                                                        date={element.date}
                                                        iconUrl={element.day.condition.icon}
                                                        highTemp={element.day.maxtemp_c}
                                                        lowTemp={element.day.mintemp_c}
                                                        description={element.day.condition.text} />
                                                ))
                                                    : <LoadingSpinner />
                                                }
                                            </div>
                                        </div>
                                        <ScrollBar orientation="horizontal" />
                                    </ScrollArea>
                                    <h1 className="label-primary">14 Day Trend</h1>
                                    <ScrollArea className="w-full whitespace-nowrap rounded-md">
                                        <div className="flex w-max space-x-4">
                                            <div className="flex justify-evenly items-center flex-wrap">
                                                {multiDayWeather ? multiDayWeather.slice(FORECAST_START, FOURTEEN_DAY_FORECAST_END).map((element, index) => (
                                                    <FourteenDayCard
                                                        key={index}
                                                        date={element.date}
                                                        iconUrl={element.day.condition.icon}
                                                        highTemp={element.day.maxtemp_c}
                                                        lowTemp={element.day.mintemp_c}
                                                    />
                                                ))
                                                    : <LoadingSpinner />
                                                }
                                            </div>
                                        </div>
                                        <ScrollBar orientation="horizontal" />
                                    </ScrollArea>
                                </div>
                            </div>
                        </main>
                    </>
                }
            </div>
        </>
    )
}

export default Dashboard;