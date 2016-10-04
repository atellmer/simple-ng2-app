import { 
  Component, 
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { Human } from './main.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl'],
  host: {'class': 'router-view'},
  animations: [
    trigger('animateTrigger', [
      state('inactive', style({
        backgroundColor: '#fff',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#FCE4EC',
        transform: 'scale(1.01)'
      })),
      transition('inactive => active', animate('300ms ease-in-out')),
      transition('active => inactive', animate('300ms ease-in-out')),
      transition('void => *', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate('300ms ease-in-out')
      ]),
    ])
  ],
})
export class MainComponent implements OnInit {
  private items: Array<Human>;
  private activeItem: Human;

  constructor() { 
    this.items = [
      new Human('Paul Wilaskes', 'normal', 26, 'inactive'),
      new Human('Alex Morales', 'normal', 30, 'inactive'),
      new Human('Pablo Escobar', 'normal', 24, 'inactive'),
      new Human('Peter Fuckingbulltshitguy', 'asshole', 26, 'inactive', 'http://www.troll.me/images/really-fat-guy-on-computer/really-fat-guy-on-computer.jpg'),
    ];
  }

  ngOnInit() {}

  clickHandler(item: Human): void {
    this.items = this.items.map((item) => {
      if (item.state === 'active') {
        item.state = 'inactive';
      }
      return item;
    });

    item.state = 'active';
    this.activeItem = item;
  }
}

