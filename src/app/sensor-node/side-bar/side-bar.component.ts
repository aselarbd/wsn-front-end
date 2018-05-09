import { Component, OnInit } from '@angular/core';
import {SensorNodeService} from "../sensor-node.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  microcontrollers = null;
  sensors = null;
  sensorNodes = null;

  constructor(private sensorNodeService: SensorNodeService) { }

  ngOnInit() {
    this.microcontrollers = this.sensorNodeService.getMicrocontrollers();
    this.sensors = this.sensorNodeService.getSensors();
    this.sensorNodes = this.sensorNodeService.getSensorNodes();
  }

}
