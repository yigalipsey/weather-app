import ForeCast from './components/ForeCast'
import TodayCard from './components/TodayCard'
import { FaSearch } from 'react-icons/fa';
import './App.css';
import { useState } from 'react';

function App() {
  const [input,setInput] = useState(" ");
  const [city1,setCity1] = useState([])
  const [background,setBackground] = useState("city")
  const [counterBtn,setCounterBtn] = useState(-1)
  const [resultCity,setResultCity] = useState({text: " ", icon: " ",  temps :" ",nameOfCity: " "});
  const [forecast,setForcast] = useState({});
  const [isButtonVisible,setIsButtonVisible] = useState(false);
  

  //Fetch data by input 
  const fetchData = (input) =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '42b487df01msh9367a40af1580cap17dd76jsn8040671db253',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${input}&days=3`, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        setResultCity({...resultCity, text : response.current.condition.text, icon:response.current.condition.icon, 
         temps:response.current.temp_c, nameOfCity: response.location.name
        })
        setForcast(response.forecast.forecastday)
        changeBackground(response?.current?.condition?.text)  
        console.log(response.current.condition.text)
        })
    .catch(err => console.error(err));  
  }
 


  const changeBackground = (bg) =>{
    console.log(bg)
    if (bg==="Partly cloudy" || bg==="Cloudy" || bg==="Overcast")  setBackground("cloudy")

    else if (bg==="Light rain" || bg=== "Rainy" || bg==="Patchy rain possible" || bg==="Moderate rain")  setBackground("rain")

    else if (bg==="Sunny" || bg==="Clear")  setBackground("sunny")
    
    else{
      setBackground("city")
    }
  }

  return (
    <div className={background.toString()}>
       
   
      <div className='main-input'>
        <div className='header-container'>
         <input className='input' placeholder="Search for City ..." onChange={(e)=>setInput(e.target.value)}/> 
         <button  className='search-btn' onClick={()=>{
             setInput(" bvhvj")
             setCounterBtn((prev)=>prev+1)
             console.log(counterBtn)
             fetchData(input) 
             changeBackground(resultCity.text)}}><FaSearch/></button> 
        </div>

        <div className='card-container'>
      
        <div className='show-card-header'>

        {counterBtn ===0 && resultCity.text !== " " && <TodayCard  resultCity={resultCity} />}
        
        {counterBtn >=1 && resultCity.text !== " "  && <ForeCast  forecast={forecast} index={counterBtn} resultCity={resultCity} changeBackground={changeBackground} />}
        </div>
        
        <div className='show-card-footer'>   
           {counterBtn>=0 && counterBtn<=2 && resultCity.text !== " "&& <button className='btn-main' onClick={()=>{
            if (counterBtn <= 2) {setCounterBtn((prev)=>prev+1)}
            if (counterBtn === 2){setCounterBtn(-1)}
           changeBackground(forecast[counterBtn+1].day.condition.text)
           console.log(forecast)
           console.log("counter"+counterBtn)
          }}>
            {counterBtn===0 ? ">> Tomorrow >>" : ">> Naxt day >>" }    
          </button> 
          }
        </div>
      
      </div>
    </div>

    </div>
  );
}

export default App;
