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
      passwords: fb.group({
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      })
    });
  }
  get oldPassword() {
    return this.changePassword.get('oldPassword');
  }
  get newPassword() {
    return this.changePassword.get('passwords.newPassword');
  }
  get confirmPassword() {
    return this.changePassword.get('passwords.confirmPassword');
  }
}
