import React, { useState } from 'react'
import axios from 'axios'
import Moment from 'react-moment'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
// & units=metric = How to change unit of mesurement
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`


  // set Location function
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container1">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
            <p><Moment format="DD-MM-yyyy">{data.date}</Moment></p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

      
     
       
    

          {data.name !== undefined && //hides the data if no location is entered.
        <container>
          <div className='forecast'>
            <div className='friday'>
            <p><Moment format="DD-MM">{data.date}</Moment></p>
            {data.main ? <p>{data.main.temp.toFixed()}°C</p> : null}
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            {data.current ? <p>{data.weather[0].main}</p> : null}


            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
            <br></br>
          </div>
           <div className="bottom1">
             
             <div><p>Min Temp</p>
              {data.main ? <p className='bold'>{data.main.temp_min.toFixed()}°C </p> : null}
              </div>
              <div className="max_temp">
              <p>Max Temp</p>
              {data.main ? <p className='bold'>{data.main.temp_max.toFixed()} °C</p> : null}
              
               </div>
             </div>
            </container>
        }
      </div>
      </div>
  );
}

export default App;
{/*

        <div className="bottom1">
            <div className="temp_min">
          {data.main ? <p>{data.main.temp_min.toFixed()}°C </p> : null} 
          <p>Min Temp</p>
            <div className="max_temp">
              {data.data ? <p className='bold'>{data.main.temp_max.toFixed()} °C</p> : null}
              <p>Max Temp</p>
            </div>
          </div>
        
      </div>
    </div>


 */}