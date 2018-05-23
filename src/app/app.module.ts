import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskInfoService } from './task-info.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    TaskDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TaskInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
