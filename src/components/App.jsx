import { useEffect, useState } from 'react';
import { CardFooter } from './cardFooter/CardFooter';
import { CardContent } from './cardContent/CardContent';
import { getWeatherFrom } from './Service/Weather';
import './App.css';
let weather = await getWeatherFrom();
function App() {
  const [departament, setDepartament] = useState('');
  
  const haddleDepartament = (e) => {
    e.preventDefault();
    setDepartament(e.target.value);
  }
  
  const haddleSubmit = async(e) => {
    e.preventDefault();
    weather = await getWeatherFrom(departament);
  }
  
  return (
    <div className='container'>
        <form onSubmit={haddleSubmit} >
          <input type="text" onChange={haddleDepartament} autoFocus/>
          <button type='submit'>Buscar</button>
        </form>
        { weather ?
        <div className='card'>
          <CardContent 
            name={weather.name}
            temperatura={weather.temperatura}
            conditionText={weather.conditionText}
            conditionIcon={weather.conditionIcon}
          />
          <CardFooter
            humidity={weather.humidity}
            windspeed={weather.windSpeed}
            feelsLike={weather.feelsLike}
            />
        </div>
         : <h3>Inicie la Busqueda</h3> }
      </div>
  )
}

export {App}
