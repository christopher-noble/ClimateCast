import { atom } from 'jotai';
import { WeatherApiResponseSuccess, HourlyWeather, ForecastDay } from '@/utils/interfaces/weather';

export const currentWeatherAtom = atom<WeatherApiResponseSuccess | null>(null);
export const hourlyWeatherAtom = atom<HourlyWeather[] | null>(null);
export const multiDayWeatherAtom = atom<ForecastDay[] | null>(null);
export const temperatureUnitAtom = atom<string>('C');

