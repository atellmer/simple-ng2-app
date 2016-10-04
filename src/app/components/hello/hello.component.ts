import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: 'hello.component.html',
  styleUrls: ['hello.component.styl'],
  host: {'class': 'router-view'}
})
export class HelloComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'login': ['AlexPlex'],
      'pass': ['qwerty'],
    });
  }

  ngOnInit() {
  }

  SubmitHandler(value): void {
    console.log('form: ', value);
  }

}
