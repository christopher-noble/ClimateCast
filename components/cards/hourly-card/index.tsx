import React from 'react';
import { formatDateHour } from '@/utils/dateTimeFormatter';
import { formatWeatherDescription, roundNumber } from '@/utils/helpers';
import { HourlyCardProps } from '@/utils/interfaces/component-props';

/**
 * HourlyCard component displays weather information for a specific hour, including the time, an icon representing
 * the weather condition, a description of the weather, and the temperature.
 *
 * Props:
 * - hour: The specific hour for which the weather information is displayed. It is formatted using formatDateHour().
 * - iconUrl: The URL for the icon representing the weather condition at the specified hour.
 * - temp: The temperature at the specified hour, displayed in degrees Celsius.
 * - description: A brief description of the weather condition at the specified hour. It is formatted for display using formatWeatherDescription().
 * - tempUnit: The temperature unit, either celcius or farenheight.
 **/

const HourlyCard: React.FC<HourlyCardProps> = ({ hour, iconUrl, temp, description, tempUnit }) => {

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 m-2 w-28 text-sm" data-testid="hourly-card">
      <p className="text-black-500">{formatDateHour(hour)}</p>
      <img src={iconUrl} alt="Weather Icon" />
      <p className="text-black-500">{formatWeatherDescription(description)}</p>
      <p className="font-semibold pt-1 text-black-500">{roundNumber(temp)}°{tempUnit}</p>
    </div>
  );
};

export default HourlyCard;
