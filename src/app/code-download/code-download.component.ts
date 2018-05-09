import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared/shared.service";

@Component({
  selector: 'app-code-download',
  templateUrl: './code-download.component.html',
  styleUrls: ['./code-download.component.css']
})
export class CodeDownloadComponent implements OnInit {

  public nodes = [
    // 'nodeA', 'NodeB'
  ];


  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.nodes = this.sharedService.addNodes;
  }

}
