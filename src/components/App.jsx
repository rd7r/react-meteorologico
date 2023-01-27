import { useState,useEffect } from 'react'
import './App.css'
import { CardIcon } from './cardIcon/CardIcon';
import { getWeatherFrom } from './Service/Weather';
const weatherPromise = await getWeatherFrom();
console.log(weatherPromise.conditionText);
function App() {
  return (
      <div className='container'>
        <input type="text" />
        <div className='card'>
          <img src="https://source.unsplash.com/100x100/?woman-designer" alt="avatar" />
          <h2></h2>
          <h3>New York</h3>
          <p>Temperatura 17°C</p>
          <CardIcon/>
        </div>
      </div>
  )
}

export {App}
