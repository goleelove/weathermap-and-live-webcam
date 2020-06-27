import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

    WeatherData:any;
  constructor() { }

  ngOnInit(){
    this.WeatherData = {
      main:{},
      isDay: true
    }
    this.getWeatherData();
    console.log(this.WeatherData);
  }
  getWeatherData(){
fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ac8acd0f33b7b45b63e005a83d8dff3e')
.then(response=>response.json)
.then(data=>{this.setWeatherData(data);}) 

  }

  setWeatherData(data){
    this.WeatherData = data;
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp-275.15).toFixed(0);
  }

}
