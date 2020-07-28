import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliPage } from './peli.page';

const routes: Routes = [
  {
    path: '',
    component: PeliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliPageRoutingModule {}
