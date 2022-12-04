import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BastionlistRoutingModule } from './bastionlist-routing.module';
import { BastionlistComponent } from './bastionlist.component';


@NgModule({
  declarations: [
    BastionlistComponent
  ],
  imports: [
    CommonModule,
    BastionlistRoutingModule
  ]
})
export class BastionlistModule { }
