import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }

  getNews(search){
    return this.http.get('http://www.publico.pt/api/list/' + search);
  }

}
