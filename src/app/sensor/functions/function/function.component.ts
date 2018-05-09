import {Component, Input, OnInit, Output} from '@angular/core';
import {sensorDataService} from "../../senser-data.service";

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {

  @Input() functionSetId = null
  @Output() microcontrollerType = '';
  @Output() headerFiles = '';
  @Output() GlobalVariables = '';
  @Output() initializeFunction = '';
  @Output() readingFunction = '';

  constructor(private sensorService: sensorDataService) { }

  ngOnInit() {
  }

  updateMicrocontrollerType (event: Event) {
    this.microcontrollerType = (<HTMLInputElement>event.target).value;
  }

  updateHeaderFiles (event: Event) {
    this.headerFiles += (<HTMLInputElement>event.target).value;
  }

  updateGlobalVariables (event: Event) {
    this.GlobalVariables += (<HTMLInputElement>event.target).value;
  }

  updateInitializeFunction(event: Event) {
    this.initializeFunction += (<HTMLInputElement>event.target).value;
  }

  updateReadingFunction(event: Event) {
    this.readingFunction += (<HTMLInputElement>event.target).value;
  }

  onDelete() {
    console.log(this.functionSetId-1);
    this.sensorService.functionSetArray[this.functionSetId-1].destroy();
    this.sensorService.functionSetArray[this.functionSetId-1] = null;
    console.log( this.sensorService.functionSetArray);
  }

}
