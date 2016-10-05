import {
  Component,
  OnInit
} from '@angular/core';

import { Human } from '../../shared/human.model';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.styl'],
  host: { 'class': 'router-view' },
})
export class MainComponent implements OnInit {
  private items: Array<Human>;
  private activeItem: Human;
  public search: string = '';

  constructor() {
    this.items = [
      new Human('Paul Wilaskes', 'normal', 26, 'inactive'),
      new Human('Alex Morales', 'normal', 30, 'inactive'),
      new Human('Pablo Escobar', 'normal', 24, 'inactive'),
      new Human('Peter Fuckingbulltshitguy', 'asshole', 26, 'inactive', 'http://www.troll.me/images/really-fat-guy-on-computer/really-fat-guy-on-computer.jpg'),
    ];
  }

  ngOnInit() { }

  selectedItemHandler(item: Human) {
    this.activeItem = item;
  }

  changeName() {
    this.items[0].name = 'Barak Husein Obama';

    //there need Immutable structure for changeDetection.onPush;
    this.items = this.items.map(item => item); 
  }
}

