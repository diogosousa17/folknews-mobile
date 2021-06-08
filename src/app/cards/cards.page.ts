import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  ultimas: any;
  type = this.router.url
  
  constructor(private cardsService: CardsService, private router: Router) { }

  ngOnInit() {
    this.getType();
  }

  getType() {
    this.cardsService.getType(this.type).subscribe(response => this.ultimas = response)
  }

  selectType(type) {
    type = type
    this.getType()
  }
  

}