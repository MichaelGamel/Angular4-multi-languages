import { DashboardComponent } from './dashboard.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
