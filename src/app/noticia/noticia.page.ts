import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from './noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  news: any
  id: string = ''
  comment: any = []
  commentary: any = []

  constructor(private service: NoticiaService, private route: ActivatedRoute) { 
    this.comment = [
      {id: 1}
    ]
  }

  ngOnInit(): void {
    this.initCurrentNew()
  }

  getNews(id: string) {
    this.service.getNews(id)
    .subscribe(response => this.news = response
      )
    }

  initCurrentNew() {
    const newsId = this.route.snapshot.paramMap.get('id')
    if (newsId != null) {
      this.id = newsId;
    }
    this.service.getNews(this.id).subscribe(response => {
      this.news = response
      this.news = [this.news]
    });
  }

  postComment(com) {
    const teste = [{com}]
    this.commentary = teste
  }

  shareUrl(url) {
    window.open(url, '_system');
  }
}