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
  like = 0
  dislike = 0
  

  constructor(private service: NoticiaService, private route: ActivatedRoute) { }

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

  likeUp() {
    if(this.like < 1 && this.dislike === 0) {
      this.like++
    }
    else if(this.like=1) {
      this.like--
    }
  }
  
  dislikeUp() {
    if(this.dislike < 1 && this.like === 0) {
      this.dislike++
    }
    else if(this.dislike = 1) {
      this.dislike--
    }
  }
}