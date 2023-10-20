import axios from "axios"
import { useState} from "react"
import { WiThermometer } from "react-icons/wi";
import { WiHot } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs"

function Weather() {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [location, setLocation] = useState('')
    const [search, setSearch] = useState(false)
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=dff99643b887b8942ba45099500548b0`
  
    const searchLocation = (event) => { 
  
      if(event.key === 'Enter') {
       axios
       .get(url)
       .then((response) => {
        setData(response.data)
        setError(false)
        setSearch(false)
        console.log(response.data)
        setLocation('')
        }) 
        .catch(error => {
          if (error.response) {
            console.log('Status Code: ', error.response.status)
            console.log('Status Data: ', error.response.data)
            setError(true)
            setLocation('')
          }
        })
      }
      
  
    }
    
    
    return (
      <>
        <section className="section_weather" id="section_weather">
          <div className="search">
            {search?(
            <input 
            type="text"
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            />
          ):(
            <div 
              onClick={() => setSearch(true)}
              className="search_container">
              < BsSearch className="search_icon" />
            </div>
          )}
             {error?<p>inccorect city</p>: null}
          </div>
          <div className="weather_container">
            <div className="text_top">
              {data.weather? <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather_icon" />: null}
              {data.name?<h2 className="city">{data.name}</h2>: null}
              {data.main?<h1>{Math.ceil(data.main.temp)}&#8457;</h1> : null}    
              {data.weather?<p>{data.weather[0].description}</p>: null} 
              {data.main?<p>H:{Math.ceil(data.main.temp_max)} L:{Math.ceil(data.main.temp_min)}</p>: null}
            </div>
          </div>
          {data.name?(
            <div className="btm_container">
              <div className="feels">
                {data.main?(
                <>
                  <p><WiThermometer className="feels_icon"/>Feels Like</p>
                  <h2>{Math.ceil(data.main.feels_like)}&#8457;</h2>
                </>
                ): null}
              </div>
              <div className="humid">
                {data.main?(
                  <>
                    <p><WiHot className="humid_icon"/> Humidity</p>
                    <h2>{Math.ceil(data.main.humidity)}%</h2>
                  </>
                  ): null}
              </div>
              <div className="wind">
                {data.wind?(
                    <>
                      <p><WiStrongWind className="wind_icon"/> Wind</p>
                      <h2>{Math.ceil(data.wind.speed)} MPH</h2>
                    </>
                   ): null}
                </div>
          </div>
          ): null}
        </section>
      </>
    );
  }
  
  export default Weather;
  
  