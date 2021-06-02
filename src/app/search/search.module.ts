import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';
import { HeaderPage } from '../header/header.page';
import { FooterPage } from '../footer/footer.page';
import { HeaderNoticiaPage } from '../header-noticia/header-noticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule
  ],
  declarations: [SearchPage, HeaderPage, FooterPage, HeaderNoticiaPage]
})
export class SearchPageModule {}
