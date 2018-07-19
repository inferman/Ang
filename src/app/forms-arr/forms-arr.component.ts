import { Component } from '@angular/core';
import {FormArray, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'forms-arr',
  templateUrl: './forms-arr.component.html',
  styleUrls: ['./forms-arr.component.css']
})
export class FormsArrComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  myForm;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  /* form and myForm is the same, just different implementation */

  get topics() {
    return this.myForm.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

}
