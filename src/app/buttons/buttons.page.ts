import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sliderOptions = {
    slidesPerView: 4,
    freeMode: true
  };
}
