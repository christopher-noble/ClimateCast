import React from 'react';
import { formatWeatherDescription, roundNumber } from '@/utils/helpers';
import { formatDateAbbreviation } from '@/utils/dateTimeFormatter';
import { MultDayCardProps } from '@/utils/interfaces/component-props';
import Image from 'next/image';

/**
 * SevenDayCard component displays a concise summary of the weather forecast for a specific day,
 * part of a 7-day weather forecast. It presents the date, a weather condition icon, a brief description
 * of the weather, and the high and low temperatures for the day.
 *
 * Props:
 * - date: A string representing the date of the forecast. This date is formatted for display using formatDateAbbreviation().
 * - description: A brief description of the weather conditions for the day.
 * - iconUrl: The URL of the icon depicting the day's weather conditions.
 * - highTemp: The forecasted high temperature for the day, in degrees Celsius.
 * - lowTemp: The forecasted low temperature for the day, in degrees Celsius.
 * - tempUnit: The temperature unit, either celcius or farenheight.
 **/

const SevenDayCard: React.FC<MultDayCardProps> = ({ date, description, iconUrl, highTemp, lowTemp, tempUnit }) => {

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-7 m-3 text-lg w-36" data-testid="seven-day-card">
      <p className="text-black-500">{formatDateAbbreviation(date)}</p>
      <img src={iconUrl} alt="Weather Icon" className="w-40 h-30 my-4" />
      <p className="text-black-500">{formatWeatherDescription(description)}</p>
      <p className="font-semibold mt-4">High: {roundNumber(highTemp)}°{tempUnit}</p>
      <p className="text-blue-500">Low: {roundNumber(lowTemp)}°{tempUnit}</p>
    </div>
  );
};

export default SevenDayCard;
