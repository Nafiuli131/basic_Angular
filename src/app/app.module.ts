import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserLoginModule } from './user-login/user-login.module';
import { Users2Component } from './users2/users2.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OnclickEventComponent } from './onclick-event/onclick-event.component';
import { GetTextValueComponent } from './get-text-value/get-text-value.component';
import { TarnaryOperatorComponent } from './tarnary-operator/tarnary-operator.component';
import { SwitchOperatorComponent } from './switch-operator/switch-operator.component';
import { ForloopComponent } from './forloop/forloop.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    Users2Component,
    InterpolationComponent,
    OnclickEventComponent,
    GetTextValueComponent,
    TarnaryOperatorComponent,
    SwitchOperatorComponent,
    ForloopComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    StyleBindingComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, UserLoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
