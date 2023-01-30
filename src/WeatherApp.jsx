import { useState } from "react";
import { Form } from "./components/Form";
import axios from "axios";
import "./WeatherApp.css";

function WeatherApp() {
  // LOGICA
  const [weather, setWeather] = useState(null);

  async function loadInfo(city = ""){
    try {
      const request = await axios(`${process.env.API_URL}&key=${process.env.API_KEY}&q=${city}`)
    } catch (error) {
      
    }
  }

  function handleChangeCity(city){
    setWeather(null)
    loadInfo(city)
  }

  // RENDER
  return (
    <main className="contender">
      <Form onChangeCity={handleChangeCity}/>
      <div>Info</div>
    </main>
  );
}

export { WeatherApp };
