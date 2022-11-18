import React from 'react'
import {TbTemperatureCelsius} from 'react-icons/tb'

export default function ForeCast({forecast,index,resultCity,changeBackground}) {
  return (
    <div>
      <div className='card'>

      <div className='top-card'>
      <h3 className={resultCity.text==="Sunny" ? "Sunny" : "not-sunny"}>{forecast[index].day.condition.text}  </h3>
      <img src={forecast[index].day.condition.icon}/>
      </div>

      <div className='middle-card'>
      <h1 className='temps'>{forecast[index].day.avgtemp_c} </h1>
      <TbTemperatureCelsius className='celsius'/> 
      </div>



     <div className='footer-card'>
     <h1> {resultCity.nameOfCity} At {forecast[index].date}</h1>
     </div>



</div>
    </div>
  )
}
