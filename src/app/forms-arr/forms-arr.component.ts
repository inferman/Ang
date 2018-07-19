import { Component } from '@angular/core';
import {FormArray, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'forms-arr',
  templateUrl: './forms-arr.component.html',
  styleUrls: ['./forms-arr.component.css']
})
export class FormsArrComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    //this.topics.controls.splice(index, 1);
    this.topics.removeAt(index);
  }

}
