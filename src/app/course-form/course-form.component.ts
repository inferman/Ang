import { Component } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  categoriesList = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Languages'},
  ];

  onSubmit(formCtrl) {
    if(formCtrl.invalid)
      return false;
    alert('form successfull submitted');
    formCtrl.reset();
  }

}
