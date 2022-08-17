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
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GetApiComponent } from './get-api/get-api.component';
import { HttpClientModule } from '@angular/common/http';
import { PostApiComponent } from './post-api/post-api.component';
import { GetAPIbyServiceComponent } from './get-apiby-service/get-apiby-service.component';
import { PipesComponent } from './pipes/pipes.component';
import { BasicRoutingComponent } from './basic-routing/basic-routing.component';
import { BasicRoutingClassComponent } from './basic-routing-class/basic-routing-class.component';
import { ParetRouteComponent } from './paret-route/paret-route.component';
import { ParetRouteClassComponent } from './paret-route-class/paret-route-class.component';
import { Parentclassroute2Component } from './parentclassroute2/parentclassroute2.component';
import { Parentclassroute3Component } from './parentclassroute3/parentclassroute3.component';
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
    ChildComponent,
    ParentComponent,
    GetApiComponent,
    PostApiComponent,
    GetAPIbyServiceComponent,
    PipesComponent,
    BasicRoutingComponent,
    BasicRoutingClassComponent,
    ParetRouteComponent,
    ParetRouteClassComponent,
    Parentclassroute2Component,
    Parentclassroute3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UserLoginModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
