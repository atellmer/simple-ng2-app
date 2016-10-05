import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { Human } from '../../shared/human.model';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animateTrigger', [
      state('inactive', style({
        backgroundColor: '#fff',
        transform: 'translateX(0) scale(1)'
      })),
      state('active', style({
        backgroundColor: '#FCE4EC',
        transform: 'translateX(0) scale(1.01)'
      })),
      transition('inactive => active', animate('300ms ease-in-out')),
      transition('active => inactive', animate('300ms ease-in-out')),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in-out')
      ]),
      transition('* => void', [
        style({ transform: 'translateY(-100%)' }),
        animate('300ms ease-in-out')
      ]),
    ])
  ],
})
export class ListComponent implements OnInit {
  @Input() items: Array<Human>;
  @Input() searchTerm: string;
  @Output() selectedItem: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectItem(item: Human): void {
    this.items = this.items.map((item) => {
      if (item.state === 'active') {
        item.state = 'inactive';
      }
      return item;
    });

    item.state = 'active';
    this.selectedItem.emit(item);
  }
}
