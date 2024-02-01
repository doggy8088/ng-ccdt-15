import { AbstractControl, Validators } from '@angular/forms';
import { isNationalIdentificationNumberValid } from "taiwan-id-validator2";
import { ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export function 本案專用的密碼複雜度檢查(control: AbstractControl) {
  const value = control.value;
  if (!value) {
    return null;
  }
  const isValid = Validators.pattern(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/
  )(control) == null;
  return isValid ? null : { 本案專用的密碼複雜度檢查: true };
}

export function 身份證字號驗證器(control: AbstractControl) {
  const value = control.value;
  if (!value) {
    return null;
  }
  const isValid = isNationalIdentificationNumberValid(value);
  return isValid ? null : { 身份證字號驗證器: true };
}

export function 檢查Email是否重複(): AsyncValidatorFn {
  const http = inject(HttpClient);
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const value = control.value;

    if (!value) {
      return of(null);
    }

    return http.get<any>('https://webhook.site/edf47e1c-5d58-4f51-85b2-b5fe81ad132b', {
      params: {
        email: value
      }
    });
  };
}
