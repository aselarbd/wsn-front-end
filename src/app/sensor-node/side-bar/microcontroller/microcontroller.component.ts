import {Component, Input, OnInit} from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-microcontroller',
  templateUrl: './microcontroller.component.html',
  styleUrls: ['./microcontroller.component.css']
})
export class MicrocontrollerComponent implements OnInit {

  @Input() microcontroller : any ;

  constructor() {
    jQuery('.ui.icon.blue.button.button_size').popup();
  }

  ngOnInit() {
  }

  public dragM (event: any) {
    console.log(event);
    event.dataTransfer.setData("content", event.target.id);
    event.dataTransfer.effectAllowed = "copy";
  }

  dragging(event: any) {
    console.log('dragging');
  }

}
