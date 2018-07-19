import {AbstractControl, ValidationErrors} from '@angular/forms';

export class SignupValidators {
  static cannotContainSpace(ctrl: AbstractControl): ValidationErrors | null {
    if ((ctrl.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
  static shouldBeUnique(ctrl: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((ctrl.value as string) === 'me') {
          resolve({shouldBeUnique: true});
        } else { resolve (null); }
      }, 2000);
    });
  }
  static checkOldPassword(ctrl: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ctrl.value !== '12345') {
          resolve({checkOldPassword: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
  static matchPasswords(ctrl: AbstractControl): ValidationErrors | null {
    let newPassword = ctrl.get('newPassword');
    let confirmPassword = ctrl.get('confirmPassword');
    if (newPassword.value !== confirmPassword.value) {
      return { matchPasswords: true };
    }
    return null;
  }
}
