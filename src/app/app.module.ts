import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ScheduleListComponent } from './component/schedule-list/schedule-list.component';
import { RoomListComponent } from './component/room-list/room-list.component';
import { ShowDetailDirective } from './directives/show-detail.directive';
import { PaginationComponent } from './util/pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScheduleListComponent,
    RoomListComponent,
    ShowDetailDirective,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
