import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiaPageRoutingModule } from './noticia-routing.module';

import { NoticiaPage } from './noticia.page';
import { HeaderPage } from '../header/header.page';
import { HeaderNoticiaPage } from '../header-noticia/header-noticia.page';
import { CardsPage } from '../cards/cards.page';
import { FooterPage } from '../footer/footer.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiaPageRoutingModule
  ],
  declarations: [NoticiaPage, HeaderPage, HeaderNoticiaPage, CardsPage, FooterPage]
})
export class NoticiaPageModule {}
