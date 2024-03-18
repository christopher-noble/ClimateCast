const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/**
 * Returns suffix, given the day of the month.
 */
const getDateSuffix = (dateOfMonth: number): string => {
    switch (dateOfMonth) {
        case 1:
        case 21:
        case 31:
            return "st";
        case 2:
        case 22:
            return "nd";
        case 3:
        case 23:
            return "rd";
        default:
            return "th";
    }
};

/**
 * Takes in 'YYYY-MM-DD HH:MM'
 * Returns (example) '10 PM'
 */
export const formatDateHour = (dateStr: string): string => {
    const hour = parseInt(dateStr.substring(11, 13), 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;

    return `${formattedHour} ${ampm}`;
};

/**
 * Takes in 'YYYY-MM-DD HH:MM'
 * Returns (example) 'Mon 1st'
 */
export const formatDateAbbreviation = (dateStr: string): string => {
    const date = new Date(dateStr);
    const dayOfWeek = daysOfWeek[date.getDay()].substring(0, 3);
    const dateOfMonth = date.getDate();
    const dateSuffix = getDateSuffix(dateOfMonth);

    return `${dayOfWeek} ${dateOfMonth}${dateSuffix}`;
};

/**
 * Takes in 'YYYY-MM-DD HH:MM'
 * Returns (example) 'Monday, January 1st, 2024'
 */
export const formatDateVerbose = (dateStr: string): string => {
    const date = new Date(dateStr);

    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    const dateOfMonth = date.getDate();
    const dateSuffix = getDateSuffix(dateOfMonth);
    const year = date.getFullYear();

    return `${dayOfWeek}, ${month} ${dateOfMonth}${dateSuffix}, ${year}`;
};

/**
 * Takes in (example) '07:03 AM'
 * Returns (example) '7:03 AM'
 */
export const stripLeadingZero = (dateStr: string): string => {
    let result: string = '';
    if (dateStr && dateStr.startsWith("0")) {
        result = dateStr.substring(1);
    }
    return result;
};

/**
 * Returns true if the input hour falls in the next 24 hours.
 */
export const isFutureHour = (elementTime: string): boolean => {
    const currentTime = new Date();
    const targetTime = new Date(elementTime);
    const currentHourReset = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), currentTime.getHours());
    const hourDifference = (targetTime.getTime() - currentHourReset.getTime()) / (1000 * 60 * 60);

    return hourDifference > 0 && hourDifference <= 24;
};