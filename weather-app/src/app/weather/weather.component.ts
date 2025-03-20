import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  standalone: true, // Ensure standalone component
  imports: [CommonModule], // Correctly include CommonModule
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'] // Fix typo: styleUrl -> styleUrls
})
export class WeatherComponent implements OnInit {
  weatherData: any = null; // Ensure weatherData is initialized
  location: string = 'Cape Town';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeather(this.location).subscribe((data: any) => {
      this.weatherData = data; // Explicitly type 'data' as 'any'
    });
  }
}