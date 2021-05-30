import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderNoticiaPage } from './header-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderNoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderNoticiaPageRoutingModule {}
