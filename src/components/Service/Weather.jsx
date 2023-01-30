const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ab3f9324b6msh25f48d35bb90470p1c16bejsn104d3f74f32b',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

export const getWeatherFrom = async(query = 'La Paz') => {
    const res = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS)
    const data = await res.json();
    const { location, current } = data;
    const { name, country, localtime } = location;
    const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
    const { code,text,icon } = condition;
    
    return {
        conditionCode: code,
        conditionText: text,
        conditionIcon: icon,
        country,
        localtime,
        name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperatura: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir
    }
}