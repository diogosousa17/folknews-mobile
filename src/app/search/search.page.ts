import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  news: any
  search: string = ''

  public SearchBarOpen = false;

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initCurrentNew()
  }

  getNews(search: string) {
    this.searchService.getNews(search)
    .subscribe(response => this.news = response
      )
    }

  initCurrentNew() {
    const newsSearch = this.route.snapshot.paramMap.get('search')
    if (newsSearch != null) {
      this.search = newsSearch;
    }
    this.searchService.getNews(this.search).subscribe(response => {
      this.news = response
      this.news = [this.news]
    });
  }

}
