import React from 'react'
import {TbTemperatureCelsius} from 'react-icons/tb'

export default function TodayCard({resultCity}) {
  return (
    <div>
      <div className='card'>

      <div className='top-card'>
      <h3 className={resultCity.text==="Sunny" ? "Sunny" : "not-sunny"}>{resultCity.text}  </h3>
      <img src={resultCity.icon}/>
      </div>

      <div className='middle-card'>
      <h1 className='temps'>{resultCity.temps} </h1>
      <TbTemperatureCelsius className='celsius'/> 
      </div>



     <div className='footer-card'>
     <h1>{resultCity.nameOfCity} Today</h1>
     </div>



</div>
    </div>
  )
}
