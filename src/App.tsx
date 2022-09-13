import { WeatherContainer } from "./components/WeatherContainer";
import { useState, useEffect, FormEvent } from "react";
import { getWeatherByCoords, getWeatherBySearch } from "./api/fetchWeather";
import { SearchBox } from "./components/SearchBox";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState("");

  //Conexión al API datos
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;

      try {
        const data = await getWeatherByCoords(LAT, LON);
        setFetchedData(data);
      } catch (err) {
        setError("Por favor revise su conexión a internet");
      }
    });
  }, []);

  //Buscador
  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault();
    setError("");

    try {
      const data = await getWeatherBySearch(CITY);

      if (data.cod === "404") {
        setError("Ciudad no encontrada 😐");
      } else if (data.cod === "400") {
        setError("Debe escribir nombre de una ciudad");
      } else {
        setFetchedData(data);
      }
    } catch (err) {
      setError("Por favor revise su conexión a internet");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <SearchBox handleSearch={handleSearch} />
      <WeatherContainer fetchedData={fetchedData} error={error} />
    </div>
  );
}

export default App;
