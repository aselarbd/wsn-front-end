import { Component, OnInit } from '@angular/core';
import { sensorDataService } from './senser-data.service'

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
  providers: [sensorDataService]
})
export class SensorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
