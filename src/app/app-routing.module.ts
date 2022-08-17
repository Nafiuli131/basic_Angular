import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicRoutingComponent } from './basic-routing/basic-routing.component';
import { BasicRoutingClassComponent } from './basic-routing-class/basic-routing-class.component';
import { ParetRouteComponent } from './paret-route/paret-route.component';
import { ParetRouteClassComponent } from './paret-route-class/paret-route-class.component';
import { Parentclassroute2Component } from './parentclassroute2/parentclassroute2.component';
import { Parentclassroute3Component } from './parentclassroute3/parentclassroute3.component';

const routes: Routes = [
  {
    component: BasicRoutingClassComponent,
    path: 'basicRouting',
  },
  {
    component: ParetRouteClassComponent,
    path: 'parentRouting',
    children: [
      {
        path: 'child1',
        component: Parentclassroute2Component,
      },
      { path: 'child2', component: Parentclassroute3Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
