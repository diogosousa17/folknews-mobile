import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  comment: ""
  setComment = []
  name: ""
  setName = []
  like = 0
  dislike = 0
  comments = []
  
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
    
    shareUrl(url) {
      window.open(url)
    }
    
    postComment(form: NgForm) {
      this.comments.push({name: form.value.nome, comment: form.value.comentario, likes: 0, dislikes: 0, isLiked: false})
    }
  }