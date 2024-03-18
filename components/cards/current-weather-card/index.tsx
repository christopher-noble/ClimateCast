import React from 'react';
import { formatDateVerbose, stripLeadingZero } from '@/utils/dateTimeFormatter';
import { roundNumber } from '@/utils/helpers';
import '@/styles/current-weather-card-styles.css'
import { CurrentWeatherCardProps } from '@/utils/interfaces/component-props';

/**
 * CurrentWeatherCard component displays detailed current weather information.
 * It presents a comprehensive view of the weather, including temperature, description,
 * and various other weather attributes such as humidity, UV index, wind details, and more.
 *
 * Props:
 * - date: Date and time of the current weather report.
 * - description: Textual description of the current weather (e.g., "Partly Cloudy").
 * - temperature: Current temperature.
 * - iconUrl: URL for the weather condition icon.
 * - feelsLike: Temperature as perceived by the human body.
 * - uvIndex: Current UV index.
 * - visibility: Visibility distance in kilometers.
 * - precipitation: Precipitation amount in millimeters.
 * - highTemp: The day's high temperature.
 * - lowTemp: The day's low temperature.
 * - windDegreee: Wind direction in degrees.
 * - windDirection: Wind direction as a compass point (e.g., N, NE).
 * - humidity: Air humidity percentage.
 * - sunset: Sunset time.
 * - sunrise: Sunrise time.
 **/

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({
  date,
  description,
  temperature,
  iconUrl,
  feelsLike,
  uvIndex,
  visibility,
  precipitation,
  highTemp,
  lowTemp,
  windDegreee,
  windDirection,
  humidity,
  sunset,
  sunrise,
}) => {
  return (
    <div className="flex shadow-lg bg-white rounded-lg ml-6 mr-6">
      <div className="grid md:grid-cols-2 gap-3 w-full p-12">
        <div className="space-y-3 text-2xl">
          <div className="element-layout">
            <p className="current-detail-value-text">{formatDateVerbose(date)}</p>
          </div>
          <div className="element-layout">
            <p>{description}</p>
          </div>
          <div className="text-center relative -translate-y-6">
            <img src={iconUrl} alt="Weather Icon" className="w-44 h-44 mt-0 inline-block" />
            <p className="text-6xl font-bold mb-5">{roundNumber(temperature)}°C</p>
            <p>Feels like {roundNumber(feelsLike)}°C</p>
          </div>
        </div>
        <div className="space-y-4 text-xl">
          <div className="element-layout">
            <p>High</p>
            <p className="current-detail-value-text">{roundNumber(highTemp)}°C</p>
          </div>
          <div className="element-layout">
            <p>Low</p>
            <p className="current-detail-value-text">{roundNumber(lowTemp)}°C</p>
          </div>
          <div className="element-layout">
            <p>UV Index</p>
            <p className="current-detail-value-text">{uvIndex}</p>
          </div>
          <div className="element-layout">
            <p>Precipitation</p>
            <p className="current-detail-value-text">{precipitation} mm</p>
          </div>
          <div className="element-layout">
            <p>Wind</p>
            <p className="current-detail-value-text">{windDegreee}° {windDirection}</p>
          </div>
          <div className="element-layout">
            <p>Humidity</p>
            <p className="current-detail-value-text">{humidity} %</p>
          </div>
          <div className="element-layout">
            <p>Visibility</p>
            <p className="current-detail-value-text">{visibility} km</p>
          </div>
          <div className="element-layout">
            <p>Sunrise</p>
            <p className="current-detail-value-text">{stripLeadingZero(sunrise)}</p>
          </div>
          <div className="element-layout">
            <p>Sunset</p>
            <p className="current-detail-value-text">{stripLeadingZero(sunset)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
