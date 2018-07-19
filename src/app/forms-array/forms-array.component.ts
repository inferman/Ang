import { Component } from '@angular/core';

@Component({
  selector: 'forms-array',
  templateUrl: './forms-array.component.html',
  styleUrls: ['./forms-array.component.css']
})
export class FormsArrayComponent {
  topicsList = [];
  topicName = '';
  addTopicToList() {
    if(this.topicName)
      this.topicsList.push(this.topicName);
    this.topicName = '';
  }
  removeTopicFromList(index) {
    this.topicsList.splice(index, 1);
  }
}
