import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SignupValidators} from '../common/customValidators/signupForm.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePassword;
  constructor(fb: FormBuilder) {
    this.changePassword = fb.group({
      oldPassword: ['', Validators.required, SignupValidators.checkOldPassword],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: SignupValidators.matchPasswords
    });
  }
  get oldPassword() {
    return this.changePassword.get('oldPassword');
  }
  get newPassword() {
    return this.changePassword.get('newPassword');
  }
  get confirmPassword() {
    return this.changePassword.get('confirmPassword');
  }
}
