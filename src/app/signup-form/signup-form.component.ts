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
    account: new FormGroup({
      username: new FormControl('',
        Validators.required,
        SignupValidators.shouldBeUnique
      ),
      password: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          SignupValidators.cannotContainSpace
        ],
        SignupValidators.shouldBeUnique
      )
    })
  });

  onChange(obj, formCtrl) {
    console.log(formCtrl, obj);
  }

  loginMethod() {
    this.myForm.setErrors({
      invalidLogin: true
    });
  }

  get password() {
    return this.myForm.get('account.password');
  }
}
