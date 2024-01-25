import { AbstractControl, Validators } from '@angular/forms';
import { isNationalIdentificationNumberValid } from "taiwan-id-validator2";

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
