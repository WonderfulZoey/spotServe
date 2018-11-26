import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() OnChange: EventEmitter<string> = new EventEmitter();

  public currentIndex:number = 1; // 当前页码
  public pageList = [];

  constructor() { }

  ngOnInit() {
    this.getPageList();
  }

   addPage () {
    this.currentIndex ++;
   }

  getPageList() {

    let total = 150;
    let size  = 10;
    let icur = this.currentIndex;  // 当前页码
    let num = Math.ceil( total / size );
    for ( var i = 0 ; i < num ; i++ ) {
      if (num <= 5) {
        this.pageList.push({
          pageid  : i + 1,
          pageicur : icur
        });
      } else if ( num - icur < 5 && icur > 4) {
        this.pageList = [
          {
            pageid: icur - 4,
            pageicur: icur
          }, {
            pageid: icur - 3,
            pageicur: icur
          }, {
            pageid: icur - 2,
            pageicur: icur
          }, {
            pageid: icur - 1,
            pageicur: icur
          }, {
            pageid: icur,
            pageicur: icur
          }
        ];
      } else {
        let cur = Math.floor((icur - 1) / 5) * 5 + 1
        this.pageList = [
          {
            pageid: cur ,
            pageicur : icur
          }, {
            pageid: cur + 1,
            pageicur : icur
          }, {
            pageid: cur + 2,
            pageicur : icur
          }, {
            pageid: cur + 3,
            pageicur : icur
          }, {
            pageid: cur + 4,
            pageicur : icur
          }
        ];
      }
    }


  }

}
