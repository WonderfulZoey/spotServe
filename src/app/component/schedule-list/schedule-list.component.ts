import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {
  public startDate: any;
  public endDate: any;
  constructor() { }


  ngOnInit() {
  }

  // 获取时间
  onDateSelect(e) {
    console.log(e);
    console.log(this.startDate);
    console.log(this.endDate);
    if (this.startDate && this.endDate) {
      console.log("do search");
    }
  }


}
