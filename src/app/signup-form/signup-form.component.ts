import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {SignupValidators} from '../common/customValidators/signupForm.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  myForm = new FormGroup({
    username: new FormControl('',
      Validators.required,
      SignupValidators.shouldBeUniq
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      SignupValidators.cannotContainSpace
    ],
      SignupValidators.shouldBeUniq
    )
  });

  onChange(obj, formCtrl) {
    console.log(formCtrl, obj);
  }

  get password() {
    return this.myForm.get('password');
  }
}
