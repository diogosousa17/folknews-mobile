import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ButtonsPage } from '../buttons/buttons.page';
import { FooterPage } from '../footer/footer.page';
import { ButtonsPageModule } from '../buttons/buttons.module';
import { HeaderNoticiaPage } from '../header-noticia/header-noticia.page';
import { HeaderPageModule } from '../header/header.module';
import { HeaderPage } from '../header/header.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ButtonsPageModule,
    HeaderNoticiaPage,
    HeaderPageModule
  ],
  declarations: [HomePage, ButtonsPage, FooterPage, HeaderPage, HeaderNoticiaPage]
})
export class HomePageModule {}
