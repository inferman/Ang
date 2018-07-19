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
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      SignupValidators.cannotContainSpace
    ])
  });

  get password() {
    return this.myForm.get('password');
  }
}
