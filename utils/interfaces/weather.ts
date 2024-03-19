export interface WeatherApiResponseSuccess {
    location: {
        name: string;
        region: string;
        country: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime: string;
        localtime_epoch: number;
    };
    current: {
        last_updated: string;
        temp_c: number;
        temp_f: number;
        condition: {
            text: string;
            icon: string;
        };
        wind_mph: number;
        wind_kph: number;
        wind_degree: number;
        wind_dir: string;
        pressure_mb: number;
        pressure_in: number;
        precip_mm: number;
        precip_in: number;
        humidity: number;
        cloud: number;
        feelslike_c: number;
        vis_km: number;
        uv: number;
    };
    forecast: {
        forecastday: Array<ForecastDay>;
    };
}

export interface WeatherApiResponseError {
    errorMessage: string;
    errorCode?: number;
}

export interface HourlyWeather {
    time: number;
    temp_c: number;
    temp_f: number;
    condition: {
        text: string;
        icon: string;
    };
    wind_mph: number;
    wind_kph: number;
    wind_dir: string;
    pressure_mb: number;
    precip_mm: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    will_it_rain: number;
    chance_of_rain: number;
    will_it_snow: number;
    chance_of_snow: number;
    vis_km: number;
}

export interface ForecastDay {
    date: string;
    day: {
        mintemp_f: number;
        maxtemp_f: number;
        maxtemp_c: number;
        mintemp_c: number;
        avgtemp_c: number;
        condition: {
            text: string;
            icon: string;
        };
        maxwind_kph: number;
        totalprecip_mm: number;
        avghumidity: number;
        daily_chance_of_rain: number;
        daily_chance_of_snow: number;
    };
    astro: {
        sunrise: string;
        sunset: string;
        moonrise: string;
        moonset: string;
    };
    hour: Array<HourlyWeather>;
}

