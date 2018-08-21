import { ServService } from '../services/serv.service';
import { ShruComponent } from './../Components/shru/shru.component';
import { CompComponent } from './../Components/comp/comp.component';
import { Example } from './../example';
import { ModModule } from './mod.module';
import { SharedModule } from './shared.module';
import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
@NgModule({
imports: [
CommonModule,
SharedModule,
],
declarations: [
CompComponent
]
})
export class DashboardModule {
 }
