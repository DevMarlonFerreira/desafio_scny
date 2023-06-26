export interface IWeatherforecast {
    date: Date;
    temperatureC: number;
    readonly temperatureF: number;
    summary?: string;
  }
  