import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {sensorDataService} from "../senser-data.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.css']
})
export class BasicDataComponent implements OnInit {

  constructor(private sensorService: sensorDataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.sensorService.getSensorBasicData(form.value);
    console.log(this.sensorService.sensorBasicData);


    this.router.navigateByUrl('/add-sensor/pin');
  }

}
