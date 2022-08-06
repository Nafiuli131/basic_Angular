import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserLoginModule } from './user-login/user-login.module';
import { Users2Component } from './users2/users2.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OnclickEventComponent } from './onclick-event/onclick-event.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, Users2Component, InterpolationComponent, OnclickEventComponent],
  imports: [BrowserModule, AppRoutingModule, UserLoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
