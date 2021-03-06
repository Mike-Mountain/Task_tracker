import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskInfoService } from './task-info.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PriorityWidgetComponent } from './priority-widget/priority-widget.component';
import { RecentTasksComponent } from './recent-tasks/recent-tasks.component';
import { SnipCodeComponent } from './snip-code/snip-code.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { DashSidebarComponent } from './dash-sidebar/dash-sidebar.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    TaskDetailComponent,
    MessagesComponent,
    TasksBoardComponent,
    DashboardComponent,
    SidebarComponent,
    PriorityWidgetComponent,
    RecentTasksComponent,
    SnipCodeComponent,
    SnippetsComponent,
    DashSidebarComponent,
    SingleTaskComponent,
    CreateTaskComponent,
    SinglePageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TaskInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
