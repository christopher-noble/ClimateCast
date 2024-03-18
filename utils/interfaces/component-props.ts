import { MouseEventHandler } from "react";

export interface ErrorMessageProps {
    showError: boolean;
    errorMessage: string;
    handleCloseError: MouseEventHandler<HTMLButtonElement>;
}

export interface CurrentWeatherCardProps {
    date: string;
    description: string;
    temperature: number;
    iconUrl: string;
    feelsLike: number;
    uvIndex: number;
    visibility: number;
    highTemp: number,
    lowTemp: number,
    precipitation: number,
    windDegreee: number,
    windDirection: string,
    humidity: number,
    sunset: string;
    sunrise: string;
};

export interface HourlyCardProps {
    key: React.Key;
    hour: string,
    iconUrl: string;
    temp: string,
    description: string,
}

export interface SevenDayCardProps {
    key: React.Key;
    date: string,
    description: string,
    iconUrl: string;
    highTemp: number;
    lowTemp: number;
}

export interface FourteenDayCardProps {
    key: React.Key;
    date: string,
    iconUrl: string;
    highTemp: number;
    lowTemp: number;
}