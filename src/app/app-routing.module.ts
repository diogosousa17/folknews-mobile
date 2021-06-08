import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ultimas',
    pathMatch: 'full'
  },

  {
    path: 'noticia/:id',
    loadChildren: () => import('./noticia/noticia.module').then(m => m.NoticiaPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: ':type',
    loadChildren: () => import('./cards/cards.module').then(m => m.CardsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }