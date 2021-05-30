import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  news: any
  search: string = ''

  public SearchBarOpen = false;

  constructor(private headerService: HeaderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initCurrentNew()
  }

  getNews(search: string) {
    this.headerService.getNews(search)
    .subscribe(response => this.news = response
      )
    }

  initCurrentNew() {
    const newsSearch = this.route.snapshot.paramMap.get('search')
    if (newsSearch != null) {
      this.search = newsSearch;
    }
    this.headerService.getNews(this.search).subscribe(response => {
      this.news = response
      this.news = [this.news]
    });
  }
}
