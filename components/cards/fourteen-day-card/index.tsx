import React from 'react';
import { formatDateAbbreviation } from '@/utils/dateTimeFormatter';
import { roundNumber } from '@/utils/helpers';
import { FourteenDayCardProps } from '@/utils/interfaces/component-props';

/**
 * FourteenDayCard component displays a brief summary of the weather forecast for a specific day,
 * part of a 14-day forecast. It shows the date, an icon representing the weather condition,
 * and the high and low temperatures for that day.
 *
 * Props:
 * - date: A string representing the date of the forecast. This date is formatted for display using formatDateAbbreviation().
 * - iconUrl: The URL of the weather condition icon to be displayed.
 * - highTemp: The forecasted high temperature for the day, in degrees Celsius.
 * - lowTemp: The forecasted low temperature for the day, in degrees Celsius.
 **/

const FourteenDayCard: React.FC<FourteenDayCardProps> = ({ date, iconUrl, highTemp, lowTemp }) => {

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-7 m-3 text-m w-32 h-68">
      <p className="text-black-500">{formatDateAbbreviation(date)}</p>
      <img src={iconUrl} alt="Weather Icon" className="w-32" />
      <p className="font-semibold mt-4">H: {roundNumber(highTemp)}°</p>
      <p className="text-blue-500">L: {roundNumber(lowTemp)}°</p>
    </div>
  );
};

export default FourteenDayCard;
