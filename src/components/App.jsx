import { useState } from 'react';
import { CardFooter } from './cardFooter/CardFooter';
import { getWeatherFrom } from './Service/Weather';
const weather = await getWeatherFrom();
import './App.css';

function App() {
  const [departament, setDepartament] = useState('hola');
  return (
      <div className='container'>
        <input type="text" onClick={()=>{console.log(departament)}}/>
        <div className='card'>
          <h1>{weather.name}</h1>
          <h2>{weather.temperatura}°</h2>
          <h3>{weather.conditionText}</h3>
          <img src={weather.conditionIcon} alt={weather.conditionIcon} />
          <CardFooter
            humidity={weather.humidity}
            windspeed={weather.windSpeed}
            feelsLike={weather.feelsLike}
          />
        </div>
      </div>
  )
}

export {App}
