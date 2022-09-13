import { WeatherData } from "../interfaces/WeatherData";

export const DetailsTable = ({
  data: {
    humidity,
    feels,
    visibility,
    pressure,
    longitude,
    latitude,
    windSpeed,
  },
}: {
  data: WeatherData;
}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td className="font-medium" >Humedad:</td>
          <td id="humidity"> {humidity} </td>
        </tr>
        <tr>
          <td className="font-medium">Grados:</td>
          <td id="feels"> {feels} </td>
        </tr>
        <tr>
          <td className="font-medium">Visibilidad:</td>
          <td id="visibility"> {visibility} </td>
        </tr>
        <tr>
          <td className="font-medium">Presión:</td>
          <td id="pressure"> {pressure} </td>
        </tr>
        <tr>
          <td className="font-medium">Longitud:</td>
          <td id="longitude"> {longitude} </td>
        </tr>
        <tr>
          <td className="font-medium">Latitud:</td>
          <td id="latitude"> {latitude} </td>
        </tr>
        <tr>
          <td className="font-medium">Vientos:</td>
          <td id="windSpeed"> {windSpeed} </td>
        </tr>
      </tbody>
    </table>
  );
};
