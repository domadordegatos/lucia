import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliPageRoutingModule } from './peli-routing.module';

import { PeliPage } from './peli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliPageRoutingModule
  ],
  declarations: [PeliPage]
})
export class PeliPageModule {}
