import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderNoticiaPageRoutingModule } from './header-noticia-routing.module';

import { HeaderNoticiaPage } from './header-noticia.page';
import { NoticiaPage } from '../noticia/noticia.page';
import { HeaderPage } from '../header/header.page';
import { CardsPage } from '../cards/cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderNoticiaPageRoutingModule
  ],
  declarations: [NoticiaPage, HeaderPage, HeaderNoticiaPage, CardsPage]
})
export class HeaderNoticiaPageModule {}
