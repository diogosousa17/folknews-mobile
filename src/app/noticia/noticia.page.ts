import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from './noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  id: any;
  news: any;

  constructor(private noticiaService: NoticiaService, private route: ActivatedRoute) { }

  ngOnInit() {
    const par = this.route.snapshot.paramMap.get('id');
    this.id=par;
    this.getNews()
  }

  getNews() {
    this.noticiaService.getNews(this.id).subscribe((response: any) => (this.news = response))
  }

}
