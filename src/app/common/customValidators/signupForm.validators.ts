import {AbstractControl, ValidationErrors} from '@angular/forms';

export class SignupValidators {
  static cannotContainSpace(ctrl: AbstractControl): ValidationErrors | null {
    if ((ctrl.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
  static shouldBeUniq(ctrl: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((ctrl.value as string) === 'me') {
          resolve({shouldBeUniq: true});
        } else { resolve (null); }
      }, 2000);
    });
  }
}
