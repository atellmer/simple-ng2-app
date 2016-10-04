import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl'],
  host: {'class': 'router-view'}
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
