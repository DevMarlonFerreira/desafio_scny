import http from "../http-common";
import { IWeatherforecast } from "typings/IWeatherforecast.d"

class WeatherforecastDataService {
  getAll() {
    return http.get<IWeatherforecast[]>("/WeatherForecast");
  }
}

const weatherforecastDataService = new WeatherforecastDataService();
export default weatherforecastDataService;