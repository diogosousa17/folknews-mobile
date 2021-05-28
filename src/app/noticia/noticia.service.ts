import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNews(id){
    return this.http.get('https://www.publico.pt/api/content/news/'+id);
  }
}
