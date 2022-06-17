import React, { useState } from 'react';
import axios from 'axios';
import Moment from 'react-moment';




function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
// & units=metric = How to change unit of mesurement
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
  

   /*  https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c */ 
  /* https://api.openweathermap.org/data/3.0/onecall?q=${location}&exclude=hourly,daily&appid=895284fb2d2c50a520ea537456963d9c */
  
  

  const image = `http://openweathermap.org/img/wn/${data.icon}@2x.png` 



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
            {data.name !==undefined && <p><Moment format="DD-MM-yyyy">{data.date}</Moment></p>}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}&deg;C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>       
    
          {data.name !== undefined && //hides the data if no location is entered.
        <container>
          <div className='forecast'>
          <div className='friday'>
          {data.name !==undefined && <p>18-06</p>} 
          <img src={'http://openweathermap.org/img/wn/02d@2x.png'} alt="Icon"/>
                <h5>Temp</h5>
                <h5>16&deg;C</h5>
          </div>

           <div className="saturday">
               {data.name !==undefined && <p>19-06</p>} 
                <img src={'http://openweathermap.org/img/wn/01d@2x.png'} alt="Icon"/>
                <h5>Temp</h5>
                <h5>19&deg;C</h5>
             </div>

             <div className="sunday">
             {data.name !==undefined && <p>20-06</p>}
             <img src={'http://openweathermap.org/img/wn/03d@2x.png'} alt="Icon"/>
             <h5>Temp</h5>
             <h5>15&deg;C</h5>
             </div>

             <div className="monday">
             {data.name !==undefined && <p>21-06</p>}
             <img src={'http://openweathermap.org/img/wn/09d@2x.png'} alt="Icon"/>
             <h5>Temp</h5> 
             <h5>8&deg;C</h5>
             </div>

             <div className="tuesday">
             {data.name !==undefined && <p>22-06</p>}
             <img src={'http://openweathermap.org/img/wn/02d@2x.png'} alt="Icon"/>
             <h5>Temp</h5> 
             <h5>17&deg;C</h5>
             </div>
            </div> 


          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}&deg;C</p> : null}
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
              {data.main ? <p className='bold'>{data.main.temp_min.toFixed()}&deg;C </p> : null}
              </div>
              <div className="max_temp">
              <p>Max Temp</p>
              {data.main ? <p className='bold'>{data.main.temp_max.toFixed()}&deg;C</p> : null}
              
               </div>
             </div>
            </container>
        }
      </div>
      </div>
  );
}

export default App;
           {/* <p><Moment format="DD-MM">{data.date}</Moment></p>
            {data.main ? <p>{data.main.temp.toFixed()}°C</p> : null}
            {data.weather ? <p>{data.weather[0].main}</p> : null}



            {data.name !==undefined && <p><Moment format="DD-MM">{data.date}</Moment></p>}
                <img src={'http://openweathermap.org/img/wn/01d@2x.png'} alt="Icon"/>
             </div>

             <div className="saturday">
               {data.name !==undefined && <p><Moment format="DD-MM">{data.date}</Moment></p>} 
                <img src={'http://openweathermap.org/img/wn/01d@2x.png'} alt="Icon"/>
             </div>

             <div className="sunday">
             {data.name !==undefined && <p><Moment format="DD-MM">{data.date}</Moment></p>}
             <img src={'http://openweathermap.org/img/wn/01d@2x.png'} alt="Icon"/>
             </div>

             <div className="monday">
             {data.name !==undefined && <p><Moment format="DD-MM">{data.date}</Moment></p>}
             <img src={'http://openweathermap.org/img/wn/01d@2x.png'} alt="Icon"/>
             </div>

             <div className="tuesday">
             {data.name !==undefined && <p><Moment format="DD-MM">{data.date}</Moment></p>}
             <img src={'http://openweathermap.org/img/wn/01d@2x.png'} alt="Icon"/>
  */}