import { useEffect, useState } from 'react';
import { CardFooter } from './cardFooter/CardFooter';
import { CardContent } from './cardContent/CardContent';
import { getWeatherFrom } from './Service/Weather';
import './App.css';

function App() {
  const [departament, setDepartament] = useState('');
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    (async()=>setWeather(await getWeatherFrom()))();
  },[]);

  const haddleDepartament = (e) => {
    e.preventDefault();
    setDepartament(e.target.value);
  }
  
  const haddleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(false);
    try {
      const temp = await getWeatherFrom(departament);
      setWeather(temp);
    } catch (error) {
    }finally{
      setIsLoading(true);
    }
    //weather
  }
  
  return (
    <div className='container'>
        <form onSubmit={haddleSubmit} >
          <input 
            type="text"
            required
            autoComplete='off' 
            onChange={haddleDepartament} 
            autoFocus/>
          <button disabled={!isLoading} type='submit'>
            {isLoading ? 'Buscar' : 'Cargando...'}
          </button>
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
