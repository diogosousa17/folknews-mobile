import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsPageRoutingModule } from './cards-routing.module';

import { CardsPage } from './cards.page';
import { HeaderPage } from '../header/header.page';
import { NoticiaPage } from '../noticia/noticia.page';
import { HeaderNoticiaPage } from '../header-noticia/header-noticia.page';
import { ButtonsPage } from '../buttons/buttons.page';
import { SearchPage } from '../search/search.page';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsPageRoutingModule,
  ],
  declarations: [CardsPage, HeaderPage, NoticiaPage, HeaderNoticiaPage, ButtonsPage, SearchPage, FooterPage]
})
export class CardsPageModule {}
