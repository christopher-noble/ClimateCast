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
    tempUnit: string,
};

export interface HourlyCardProps {
    key: React.Key;
    hour: string,
    iconUrl: string;
    temp: number,
    description: string,
    tempUnit: string
}

export interface MultDayCardProps {
    key: React.Key;
    date: string,
    description: string,
    iconUrl: string;
    highTemp: number;
    lowTemp: number;
    tempUnit: string
}