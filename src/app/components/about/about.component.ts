import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.styl'],
  host: {'class': 'router-view'}
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
