import React, {useState} from 'react'
import axios from 'axios'; 


function App() {

  //const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&app=id{160e73ffa0a92d35a95c5217dadc6517}` 


  return (
    <div className='app'> 
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Sheffield</p>
            </div>
            <div className='temp'>
              <h1>20°</h1>
              </div>
              <div className='description'>
                <p>Clouds</p>
                </div>
              </div>
            <div className='bottom'></div>
            <div className='feels'> 
            <p className='bold'>15°</p>
            <p>Feels like</p>
            </div>
            <div className='humidity'>
              <p className='bold'>20%</p>
              <p>Humidity</p>
               </div>
            <div className='wind'>
              <p>12 MPH</p>
              <p>Wind Speed</p>
               </div>
      </div> 
    </div>
  );
}

export default App
